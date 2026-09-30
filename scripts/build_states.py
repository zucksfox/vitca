"""
build_states.py -- sprite mascot NURVITA jadi satu set state yang ANCHOR-SAMA.

MASALAH YANG TERUKUR DARI MASTER (assets/_source/, 1254x1254 semua):

  nurvita-idle.png    body x[364..887] y[107..1192]  tinggi 1086
  nurvita-blink.png   body x[69..1183]  y[94..1191]  tinggi 1098
  nurvita-hello.png   body x[128..650]  y[61..1207]  tinggi 1143

  1. TINGGI BEDA (1086/1098/1143). CSS memakai object-fit:contain, jadi tiap PNG
     di-scale menurut TINGGI frame. Naik-turun tinggi = karakter melompat besar
     tiap ganti state (+/- 5% idle<->hello).
  2. SUMBU X BEDA. Badan hello bergeser 236 px ke kiri, blink 295 px ke kanan.
     Tiap crossfade = karakter melompat ke samping.
  3. BUBBLE TER-BAKE di PNG hello (x 819..1199, y 76..355): (a) menggeser
     "tengah kepala" kalau tidak dipisah, (b) tampil dobel dgn .bubble HTML/CSS.
  4. FIELD TANGAN hello terpisah dari tubuh, bertumpuk dgn 3 partikel oranye
     -> deteksi bodi berbasis warna/komponen-tunggal gagal (tangan hilang).

PERBAIKAN
  A. Siluet bodi tanpa asumsi warna:
       - komponen terbesar = badan (partikel oranye terpisah -> otomatis tidak ikut)
       - tambahkan komponen yg beririsan dengan badan SETELAH DILASI 26px
         (field-tangan hello punya celah +-10px dari lengan bawah)
       - buang region speech bubble (blob bulat di kanan kolom 760, terpisah vertikal
         dari kepala -> dideteksi dari celah baris kosong)
  B. Affine-warp seragam: tinggi badan, sumbu-X kepala, dan garis kaki disamakan
     pada kanvas 1254x1254.
  C. Resample BICUBIC dengan PREMULTIPLIED alpha -> tepi pixel-art tetap tegas,
     tidak ada halo putih di background gelap.
  D. Union-bbox + pad 20px -> crop identik (aspect dipertahankan).
  E. Verifikasi: IoU(0,0) harus >= IoU tiap offset -> bukti tidak ada sisa geser;
     script exit code != 0 kalau masih geser.

Jalankan: python build_states.py     (idempotent; sumber selalu assets/_source/)
"""
import json
import os
import numpy as np
from collections import deque
from PIL import Image, ImageFilter

NP = np
BASE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(BASE, "assets")
SOURCE = os.path.join(ASSETS, "_source")
ORDER = ["nurvita-idle.png", "nurvita-blink.png", "nurvita-hello.png"]

CANVAS = 1254
TARGET_HEAD_CX = 727.0     # sumbu X tubuh (tengah badan idle)
TARGET_FEET_Y = 1252.0     # garis tanah (sepatu idle)
TARGET_HEIGHT = 1150.0     # tinggi badan acuan
PAD = 20
LINK_DILATE = 26
BUBBLE_COL = 760           # pemisah bubble: badan hello selesai di x=650
MIN_FX_BAND = 0.16         # 16% baris teratas = kepala


# ------------------------------------------------------------------ helpers
def flood(mask, seeds):
    h, w = mask.shape
    out = NP.zeros((h, w), dtype=bool)
    q = deque()
    for (x, y) in seeds:
        if 0 <= y < h and 0 <= x < w and mask[y, x] and not out[y, x]:
            out[y, x] = True
            q.append((y, x))
    while q:
        y, x = q.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not out[ny, nx]:
                out[ny, nx] = True
                q.append((ny, nx))
    return out


def components(mask):
    h, w = mask.shape
    lab = NP.zeros((h, w), dtype=NP.int32)
    sizes, n = {}, 0
    for sy in range(h):
        for sx in NP.flatnonzero(mask[sy]):
            if lab[sy, sx]:
                continue
            n += 1
            q = deque([(sy, sx)])
            lab[sy, sx] = n
            c = 0
            while q:
                y, x = q.popleft()
                c += 1
                for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not lab[ny, nx]:
                        lab[ny, nx] = n
                        q.append((ny, nx))
            sizes[n] = c
    return lab, sizes


def dilate(m, r):
    return NP.array(Image.fromarray((m * 255).astype(NP.uint8))
                    .filter(ImageFilter.MaxFilter(2 * r + 1))) > 0


def rows_runs(m, y, lo=0, hi=None):
    hi = m.shape[1] if hi is None else hi
    row = m[y, lo:hi].astype(NP.int8)
    idx = NP.flatnonzero(NP.diff(NP.concatenate(([0], row, [0]))))
    return [(int(idx[i]) + lo, int(idx[i + 1]) - 1 + lo) for i in range(0, len(idx), 2)]


def premult_warp(im, aff):
    a = NP.array(im).astype(NP.float32)
    al = a[:, :, 3:4] / 255.0
    pre = NP.concatenate([a[:, :, :3] * al, a[:, :, 3:4]], axis=2)
    img = Image.fromarray(NP.clip(pre, 0, 255).astype(NP.uint8))
    out = NP.array(img.transform((CANVAS, CANVAS), Image.AFFINE, aff,
                                 resample=Image.BICUBIC)).astype(NP.float32)
    al2 = out[:, :, 3:4] / 255.0
    out[:, :, :3] = NP.clip(out[:, :, :3] / NP.where(al2 > 1e-4, al2, 1.0), 0, 255)
    out[:, :, 3] = NP.clip(out[:, :, 3], 0, 255)
    return Image.fromarray(out.astype(NP.uint8))


# ------------------------------------------------------------------ silhouette
def alpha_silhouette(rgba):
    al = rgba[:, :, 3]
    if (al < 20).mean() > 0.05:
        return al > 128, "alpha"
    rgb = rgba[:, :, :3].astype(int)
    dark = rgb.max(axis=2) < 38
    h, w = dark.shape
    ring = ([(x, 0) for x in range(w)] + [(x, h - 1) for x in range(w)] +
            [(0, y) for y in range(h)] + [(w - 1, y) for y in range(h)])
    return ~flood(dark, ring), "near-black"


def bubble_region(sil, col=BUBBLE_COL):
    """Region speech bubble = blob di kanan kolom `col` yang terpisah vertikal dari
    kepala (ada baris kosong di kiri kolom itu pada rentang baris bubble)."""
    h, w = sil.shape
    right = NP.zeros_like(sil)
    right[:, col:] = True
    cand = sil & right
    if cand.sum() < 300:
        return NP.zeros_like(sil)
    yy = NP.where(cand.any(axis=1))[0]
    y0, y1 = int(yy.min()), int(yy.max())
    # baris kosong di kiri kolom => benar terpisah dari kepala
    left_rows = sil[:, :col].any(axis=1)
    gap = [y for y in range(y0, y1 + 1) if not left_rows[y]]
    if not gap:
        return NP.zeros_like(sil)
    lab, sizes = components(cand)
    if not sizes:
        return NP.zeros_like(sil)
    big = max(sizes.items(), key=lambda kv: kv[1])[0]
    by, bx = NP.where(lab == big)
    x0, x1, by0, by1 = bx.min(), bx.max(), by.min(), by.max()
    reg = NP.zeros_like(sil)
    reg[max(0, by0 - 12):min(h, by1 + 80),                 # +80 utk ekor bubble
        max(0, x0 - 70):min(w, x1 + 40)] = True            # bubble hello mulai x=819
    return reg & sil


def body_mask(sil, name):
    lab, sizes = components(sil)
    big = max(sizes.items(), key=lambda kv: kv[1])[0]
    body = lab == big

    bd = dilate(body, LINK_DILATE)
    for cid, sz in sizes.items():
        if cid == big or sz < 150:
            continue
        comp = lab == cid
        if (comp & bd).sum() > 0:
            body |= comp

    if "hello" in name:
        body &= ~bubble_region(sil)
    return body


def head_axis(body, fx):
    """Sumbu X kepala = median tengah RUN TERLEBAR pada 16% baris teratas."""
    yy = NP.where(body.any(axis=1))[0]
    top, bottom = int(yy.min()), int(yy.max())
    band = max(8, int((bottom - top + 1) * MIN_FX_BAND))
    lo, hi = max(0, int(fx) - 300), min(body.shape[1], int(fx) + 300)
    cs = []
    for y in range(top, top + band):
        runs = rows_runs(body, y, lo, hi)
        if runs:
            s, e = max(runs, key=lambda r: r[1] - r[0])
            cs.append((s + e) / 2)
    if not cs:
        raise SystemExit("head_axis: tidak ada run di band kepala")
    return float(NP.median(cs)), top, bottom


# ------------------------------------------------------------------ main
def main():
    if not os.path.isdir(SOURCE):
        raise SystemExit("assets/_source/ tidak ada")

    warped, info = {}, {}
    for n in ORDER:
        im = Image.open(os.path.join(SOURCE, n)).convert("RGBA")
        rgba = NP.array(im)
        sil, src = alpha_silhouette(rgba)
        body = body_mask(sil, n)

        fx, fy = TARGET_HEAD_CX, TARGET_FEET_Y
        hcx, top, bottom = head_axis(body, fx)
        nat_h = bottom - top + 1
        s = TARGET_HEIGHT / nat_h
        aff = (1 / s, 0, hcx - fx / s,
               0, 1 / s, bottom - fy / s)

        arr = NP.array(premult_warp(im, aff))
        drop = sil & ~body
        if drop.any():
            dw = NP.array(Image.fromarray((dilate(drop, 3) * 255).astype(NP.uint8)).transform(
                (CANVAS, CANVAS), Image.AFFINE, aff, resample=Image.NEAREST)) > 40
            arr[dw, 3] = 0
        warped[n] = Image.fromarray(arr)

        ys, xs = NP.where(body)
        info[n] = dict(source=src, natural_h=nat_h, scale=round(s, 4),
                       head_cx_src=round(hcx, 1),
                       body_bbox_src=[int(xs.min()), int(xs.max()), int(ys.min()), int(ys.max())],
                       dropped_px=int(drop.sum()))
        print("  %-20s [%s] body x[%4d..%4d] y[%4d..%4d] h=%4d head_cx=%6.1f s=%.4f drop=%d"
              % (n, src, xs.min(), xs.max(), ys.min(), ys.max(), nat_h, hcx, s, drop.sum()))

    u = NP.zeros((CANVAS, CANVAS), dtype=bool)
    for n in ORDER:
        u |= NP.array(warped[n])[:, :, 3] > 20
    ys, xs = NP.where(u)
    x0, x1 = max(0, xs.min() - PAD), min(CANVAS - 1, xs.max() + PAD)
    y0, y1 = max(0, ys.min() - PAD), min(CANVAS - 1, ys.max() + PAD)
    W, H = x1 - x0 + 1, y1 - y0 + 1
    for n in ORDER:
        warped[n].crop((x0, y0, x1 + 1, y1 + 1)).save(os.path.join(ASSETS, n), optimize=True)
    print("\ncrop x[%d..%d] y[%d..%d] -> %dx%d aspect=%.4f" % (x0, x1, y0, y1, W, H, W / H))

    # ---------------- verifikasi ----------------
    M = {n: NP.array(Image.open(os.path.join(ASSETS, n)).convert("RGBA"))[:, :, 3] > 128
         for n in ORDER}
    ref = M[ORDER[0]]
    HH, WW = ref.shape

    def iou(a, b, dx, dy):
        xa0, xa1 = max(0, dx), min(WW, WW + dx)
        ya0, ya1 = max(0, dy), min(HH, HH + dy)
        A = a[ya0:ya1, xa0:xa1]
        B = b[ya0 - dy:ya0 - dy + A.shape[0], xa0 - dx:xa0 - dx + A.shape[1]]
        u = (A | B).sum()
        return (A & B).sum() / u if u else 0.0

    print("\nverifikasi alignment (IoU(0,0) harus >= IoU tiap offset):")
    ok = True
    for n in ORDER[1:]:
        base = iou(ref, M[n], 0, 0)
        best, bo = base, (0, 0)
        for dy in range(-30, 31, 2):
            for dx in range(-30, 31, 2):
                v = iou(ref, M[n], dx, dy)
                if v > best + 1e-9:
                    best, bo = v, (dx, dy)
        good = (bo == (0, 0)) or (best - base < 0.002)
        ok &= good
        print("  idle vs %-20s IoU(0,0)=%.4f terbaik=%.4f@%-8s %s"
              % (n, base, best, str(bo), "OK" if good else "MASIH GESER"))

    lt = slice(int(HH * 0.68), HH)
    for n in ORDER[1:]:
        print("  torso+kaki idle vs %-20s IoU=%.4f"
              % (n, (ref[lt] & M[n][lt]).sum() / (ref[lt] | M[n][lt]).sum()))

    print("\nanchor tiap state:")
    anchors = {}
    for n in ORDER:
        mm = M[n]
        yy = NP.where(mm.any(axis=1))[0]
        top, bot = int(yy.min()), int(yy.max())
        cs = []
        for y in range(top, top + int((bot - top) * MIN_FX_BAND)):
            runs = rows_runs(mm, y)
            if runs:
                s2, e2 = max(runs, key=lambda r: r[1] - r[0])
                cs.append(100 * ((s2 + e2) / 2) / WW)
        med = float(NP.median(cs)) if cs else -1
        anchors[n] = dict(head_cx_pct=round(med, 2), top_pct=round(100 * top / HH, 2),
                          feet_pct=round(100 * bot / HH, 2),
                          height_pct=round(100 * (bot - top + 1) / HH, 2))
        print("  %-20s head_cx=%.2f%% top=%.2f%% kaki=%.2f%% tinggi=%.2f%%"
              % (n, med, 100 * top / HH, 100 * bot / HH, 100 * (bot - top + 1) / HH))

    mm = M[ORDER[0]]
    yy = NP.where(mm.any(axis=1))[0]
    top, bot = int(yy.min()), int(yy.max())
    band = int((bot - top) * MIN_FX_BAND)
    rows = [NP.flatnonzero(r) for r in mm[top:top + band]]
    right = max(r.max() for r in rows if len(r))
    left = min(r.min() for r in rows if len(r))
    meta = dict(canvas=[W, H], aspect=round(W / H, 4), anchors=anchors, source=info,
                head_band=dict(x_left_pct=round(100 * left / W, 2),
                               x_right_pct=round(100 * right / W, 2),
                               y_top_pct=round(100 * (top - y0) / H, 2),
                               y_bottom_pct=round(100 * (top + band - y0) / H, 2)),
                alignment_ok=bool(ok))
    with open(os.path.join(ASSETS, "_anchors.json"), "w") as f:
        json.dump(meta, f, indent=2)
    print("\nhead band x[%.2f%%..%.2f%%] y[%.2f%%..%.2f%%]" %
          (meta["head_band"]["x_left_pct"], meta["head_band"]["x_right_pct"],
           meta["head_band"]["y_top_pct"], meta["head_band"]["y_bottom_pct"]))
    print("alignment_ok =", ok, "-> assets/_anchors.json")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())

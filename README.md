# Nurvita Octaviani — Accounting & Finance Portfolio

A modern, high-precision editorial personal portfolio website for **Nurvita Octaviani**, specialized in **Accounting & Finance**.

> *"Building a Career, Brick by Brick"*

The website combines modern corporate annual report design, vertical section storytelling, an interactive LEGO/voxel companion mascot with lifelike dual-layer eye blinking, and a built-in ATS-friendly CV generator.

---

## 🌟 Key Features

1. **Bilingual Support (ID / EN) with Auto-Detection**:
   - Seamless instant translation between Bahasa Indonesia and English.
   - Automatically detects user locale on first load and persists choice in `localStorage`.

2. **Interactive Voxel Mascot (`MascotController`)**:
   - Grand showcase companion on the Hero section welcoming visitors with *"Hai, Selamat Datang!"*.
   - Dynamic pose transitions for each chapter (*waving, idle, graduation, calculator, thinking, laptop, contact*).
   - Instant dual-layer optical blinking with zero flicker or body jitter using `wave_kedip`.
   - Adaptive speech bubble that automatically updates on section scroll or cursor hover.

3. **High-Precision Smooth Section Glide**:
   - Native GPU compositor scroll-snapping on desktop.
   - Smart section boundary detection that lets users comfortably read detailed content before transitioning chapters.

4. **1-Page ATS-Friendly CV (PDF)**:
   - Includes real downloadable `CV_Nurvita_Octaviani_ATS.pdf` compiled with ReportLab.
   - Clean single-page layout optimized for applicant tracking systems (Helvetica typography, clear hierarchy).

5. **Fully Responsive Across All Devices**:
   - Tailored layouts for Mobile (320px–430px), Tablets/iPads (768px–1024px), and Desktop/HiDPI displays.
   - Mobile intelligent auto-dimming mascot during active scrolling.
   - Custom LEGO stud cursor for desktop pointer fine devices.

---

## 📂 Project Structure

```text
├── index.html                   # Core semantic single-page HTML5 markup
├── style.css                    # Editorial stylesheet, responsive suite, typography
├── script.js                    # MascotController, i18n engine, smooth scroll logic
├── CV_Nurvita_Octaviani_ATS.pdf # 1-Page ATS-compliant CV document
├── mascot/                      # High-performance WebP mascot character poses
│   ├── waving.webp
│   ├── wave_kedip.webp
│   ├── idle.webp
│   ├── blink.webp
│   ├── graduation.webp
│   ├── calculator.webp
│   ├── thinking.webp
│   ├── laptop.webp
│   └── contact.webp
├── assets/                      # High-resolution source assets & models
└── .gitignore                   # Clean ignore rules
```

---

## 🚀 Deployment & Local Preview

Open `index.html` directly in any modern browser, or serve with any static web server:

```bash
# Python local server
python -m http.server 8000
```

Deployable with zero configuration on **Vercel**, **Netlify**, **GitHub Pages**, or **Cloudflare Pages**.

---

© 2026 Nurvita Octaviani. All rights reserved.

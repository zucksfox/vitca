/**
 * NURVITA OCTAVIANI — ACCOUNTING & FINANCE PORTFOLIO
 * High-Precision Smooth Scroll Engine, MascotController & Bilingual i18n System (EN / ID)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     01. BILINGUAL DICTIONARY (EN & ID)
     ========================================================================== */
  const I18N = {
    en: {
      page_title: "Nurvita Octaviani — Accounting & Finance Portfolio",
      page_desc: "Professional Accounting Portfolio of Nurvita Octaviani. Proven operational rigor in daily cash drawer reconciliation (zero variance), laboratory statistics, and regional public sector innovation.",
            cv_download_btn: "Download CV",
      contact_download_cv: "Download Full CV (ATS Format)",
      nav_about: "About",
      nav_education: "Education",
      nav_experience: "Experience",
      nav_internship: "Internship",
      nav_skills: "Skills",
      nav_contact: "Contact",
      sec_label_01: "HERO",
      sec_label_02: "ABOUT",
      sec_label_03: "EDUCATION",
      sec_label_04: "EXPERIENCE",
      sec_label_05: "INTERNSHIP",
      sec_label_06: "SKILLS",
      sec_label_07: "CONTACT",
      hero_tag: "01 / PORTFOLIO — 2026",
      hero_discipline: "ACCOUNTING & FINANCE",
      hero_lead: "Accounting Graduate from Universitas Muhammadiyah Magelang, focused on financial administration, cash reconciliation, and structured financial reporting.",
      hero_btn_explore: "Explore Portfolio",
      hero_btn_contact: "Connect / Get in Touch",
      hero_scroll_cue: "SCROLL TO EXPLORE",
      about_tag: "02 / ABOUT ME",
      about_heading: "Precision in every ledger,<br>transparency in every report.",
      about_standout: "Sound financial governance is built upon disciplined documentation, methodical transaction verification, and strict adherence to accounting standards.",
      about_p1: "As an Accounting Graduate from Universitas Muhammadiyah Magelang (2022 - 2026), I have proven my attention to detail in the field: balancing physical cash drawers to zero variance at shift closing, guiding students through statistical modeling in laboratory sessions, and verifying regulatory innovation proposals at BAPPERIDA Magelang.",
      about_p2: "My professional operational standard focuses on end-to-end precision: assembling vouchers, journals, and financial statements systematically so leadership can make strategic decisions with total confidence.",
      about_pillar1_title: "Cash Reconciliation & Accuracy (Zero Variance)",
      about_pillar1_desc: "Methodical reconciliation between physical drawer cash, source receipts, and ledger postings to maintain zero variance.",
      about_pillar2_title: "Audit-Ready Administration",
      about_pillar2_desc: "Systematic documentation workflows, transparent audit trails, and structured spreadsheet models ready for inspection at any moment.",
      about_pillar3_title: "Ethical Accountability & Compliance",
      about_pillar3_desc: "Full accountability handling operational funds and public sector data, maintaining confidentiality, and communicating transparently.",
      edu_tag: "03 / EDUCATION",
      edu_heading: "Academic Foundation & Financial Standards",
      edu_faculty: "FACULTY OF ECONOMICS & BUSINESS",
      edu_program: "S1 ACCOUNTING",
      edu_period: "2022 - 2026",
      edu_narrative: "Rigorous curriculum covering Indonesian Financial Accounting Standards (SAK), internal control frameworks, corporate taxation, and computational business analysis.",
      edu_gpa_caption: "CUMULATIVE GPA",
      edu_gpa_scale: "SCALE 4.00 / VERY SATISFACTORY",
      edu_gpa_note: "Coursework focused on financial accounting standards, internal control systems, taxation, and business data analysis.",
      exp_tag: "04 / WORK EXPERIENCE",
      exp_heading: "Applied Operational Experience",
      exp_subhead: "Proven track record in quantitative analysis mentorship, retail cash governance, and daily ledger balancing.",
      exp1_type: "ACADEMIC APPOINTMENT",
      exp1_role: "Laboratory Assistant — Statistics & Digital Computing",
      exp1_summary: "Facilitated computational business statistics practicums, ensuring strict administration over laboratory attendance, dataset validation, and score records.",
      exp1_b1: "Guided students through statistical computation workflows, business data validation, and parametric hypothesis testing.",
      exp1_b2: "Maintained 100% administrative accuracy across attendance logs, laboratory assignment schedules, and score registers.",
      exp1_b3: "Assisted faculty lecturers in structuring applied numerical case studies and practical economic data simulation files.",
      tag_biz_stat: "Business Statistics",
      tag_data_ver: "Data Verification",
      tag_acad_adm: "Academic Administration",
      tag_inst_guide: "Instructional Guidance",
      exp2_type: "OPERATIONAL PRACTICE",
      exp2_role: "Cashier & Financial Transaction Administrator",
      exp2_org: "Retail Transaction Operations",
      exp2_summary: "Managed high-volume cash flow and digital payments (QRIS/EDC), consistently achieving a zero-variance record on daily shift closing.",
      exp2_b1: "Processed high-volume customer transactions across cash, QRIS, and debit cards with zero calculation discrepancies.",
      exp2_b2: "Conducted physical cash drawer audits at shift opening and closing; physical cash matched POS totals with 100% accuracy.",
      exp2_b3: "Administered petty cash disbursements, verified supporting receipts and supplier invoices, and prepared daily settlement summaries for management review.",
      tag_cash_gov: "Cash Drawer Governance",
      tag_pos_rec: "POS Reconciliation",
      tag_petty_cash: "Petty Cash Management",
      tag_audit_trail: "Audit Trails",
      intern_tag: "05 / INTERNSHIP",
      intern_heading: "Public Sector Document Verification & Regional Planning",
      intern_inst_tag: "REGIONAL GOVERNMENT PLANNING AGENCY",
      intern_date_tag: "JANUARY — MAY 2025",
      intern_div_prefix: "Division:",
      intern_div_name: "Bidang Riset dan Inovasi (Research & Innovation Division)",
      intern_f1_title: "Regional Innovation Index (IID) Assessment",
      intern_f1_desc: "Reviewed and screened dozens of municipal innovation proposals submitted by regional government units (SKPD) against national regulatory assessment benchmarks.",
      intern_f2_title: "Document Cross-Checking & Compliance",
      intern_f2_desc: "Verified supporting physical documents, organized quantitative spreadsheets, and maintained structured digital archiving to satisfy regulatory guidelines.",
      intern_f3_title: "Evaluation Summaries & Reporting",
      intern_f3_desc: "Prepared concise evaluation summaries and supported inter-agency coordination forums assessing regional innovation readiness.",
      skills_tag: "06 / SKILLS & COMPETENCIES",
      skills_heading: "Applied Capabilities & Technical Tools",
      skills_subhead: "Practical competencies developed through laboratory statistics instruction, retail cashier reconciliation, and public sector document review.",
      cat_accounting: "ACCOUNTING & FINANCE",
      skill_fa_title: "Financial Administration",
      skill_fa_desc: "Systematic voucher tracking, expense categorization, and archiving.",
      skill_cm_title: "Cash Management & Reconciliation",
      skill_cm_desc: "Physical drawer auditing, petty cash verification, and zero-variance balancing.",
      skill_tr_title: "Transaction Recording",
      skill_tr_desc: "Double-entry journalizing, general ledger posting, and trial balance balancing.",
      skill_bm_title: "Budget Monitoring",
      skill_bm_desc: "Tracking periodic operational allocations against real expenditures.",
      skill_fr_title: "Financial Reporting",
      skill_fr_desc: "Drafting balance sheets, profit & loss statements, and supporting schedules.",
      cat_tools: "TOOLS & SOFTWARE",
      skill_excel_desc: "VLOOKUP, XLOOKUP, PivotTables, conditional formulas, and data cleanup.",
      skill_word_desc: "Technical report formatting, formal letters, and audit documentation.",
      skill_ppt_desc: "Clear executive presentations, visual financial data summaries, and deck design.",
      skill_gw_desc: "Collaborative spreadsheets, shared cloud drive structuring, and Google Forms.",
      skill_stat_title: "Statistical Software",
      skill_stat_desc: "Quantitative data validation, regression computations, and dataset hygiene.",
      cat_practices: "PROFESSIONAL PRACTICES",
      skill_detail_title: "Attention to Detail",
      skill_detail_desc: "Careful checking for discrepancies across numbers, transaction dates, voucher references, and balances.",
      skill_time_title: "Time Management",
      skill_time_desc: "Punctual execution for period-end reconciliations and institutional deadlines.",
      skill_team_title: "Teamwork & Coordination",
      skill_team_desc: "Effective communication across academic cohorts and inter-agency working teams.",
      skill_lead_title: "Leadership & Mentorship",
      skill_lead_desc: "Guiding laboratory practicum students through computational challenges.",
      skill_adapt_title: "Adaptability & Discipline",
      skill_adapt_desc: "Fast onboarding to new accounting standards, operating systems, and workflows.",
      contact_tag: "07 / CONTACT",
      contact_heading: "Ready to bring value to<br><em>your finance team.</em>",
      contact_pitch: "I am actively seeking full-time and trainee opportunities as a <strong>Junior Accountant, Finance Staff, Tax Officer, or Audit Associate</strong>. Feel free to contact me via email to discuss how I can contribute to your organization.",
      contact_status_title: "CURRENT STATUS: READY FOR IMMEDIATE EMPLOYMENT",
      contact_status_desc: "Open for full-time opportunities, management trainee programs, and professional accounting or audit roles.",
      contact_email_label: "DIRECT EMAIL",
      contact_copy_btn: "Copy Email",
      contact_copied: "Copied!",
      contact_loc_label: "LOCATION",
      contact_loc_val: "Magelang, Central Java, Indonesia (Open to Hybrid / On-Site)",
      contact_acad_label: "ACADEMIC BASE",
      contact_acad_val: "Universitas Muhammadiyah Magelang — S1 Accounting",
      contact_send_btn: "Send Invitation / Direct Email"
    },

    id: {
      page_title: "Nurvita Octaviani — Portofolio Akuntansi & Keuangan",
      page_desc: "Portofolio Profesional Akuntansi Nurvita Octaviani. Teruji dalam rekonsiliasi kas harian tanpa selisih (zero variance), bimbingan statistik laboratorium, dan validasi inovasi sektor publik.",
            cv_download_btn: "Unduh CV",
      contact_download_cv: "Unduh CV Lengkap (Format ATS)",
      nav_about: "Tentang",
      nav_education: "Pendidikan",
      nav_experience: "Pengalaman",
      nav_internship: "Magang",
      nav_skills: "Keahlian",
      nav_contact: "Kontak",
      sec_label_01: "HERO",
      sec_label_02: "TENTANG",
      sec_label_03: "PENDIDIKAN",
      sec_label_04: "PENGALAMAN",
      sec_label_05: "MAGANG",
      sec_label_06: "KEAHLIAN",
      sec_label_07: "KONTAK",
      hero_tag: "01 / PORTOFOLIO — 2026",
      hero_discipline: "AKUNTANSI & KEUANGAN",
      hero_lead: "Lulusan S1 Akuntansi Universitas Muhammadiyah Magelang yang berfokus pada administrasi keuangan, pengelolaan kas, dan pelaporan akuntansi yang akuntabel.",
      hero_btn_explore: "Lihat Portofolio",
      hero_btn_contact: "Undang Diskusi / Kontak",
      hero_scroll_cue: "GULIR UNTUK MENJELAJAHI",
      about_tag: "02 / TENTANG SAYA",
      about_heading: "Ketelitian dalam pencatatan,<br>transparansi dalam pelaporan.",
      about_standout: "Tata kelola keuangan yang sehat dibangun melalui disiplin dokumentasi, verifikasi transaksi yang cermat, dan kepatuhan penuh terhadap standar akuntansi.",
      about_p1: "Sebagai lulusan S1 Akuntansi Universitas Muhammadiyah Magelang (2022 - 2026), saya telah mengasah ketelitian di lapangan: mengontrol uang fisik di laci kasir hingga penutupan shift tanpa minus, mendampingi mahasiswa memecahkan olah data statistik di laboratorium, serta memvalidasi puluhan dokumen regulasi di BAPPERIDA Kota Magelang.",
      about_p2: "Standar kerja profesional saya berfokus pada ketelitian menyeluruh: menyusun bukti transaksi, jurnal, hingga neraca saldo secara presisi agar manajemen dan pimpinan dapat mengambil keputusan strategis tanpa keraguan.",
      about_pillar1_title: "Akurasi Kas & Rekonsiliasi (Zero Variance)",
      about_pillar1_desc: "Disiplin mencocokkan uang fisik kasir, bukti transaksi kas kecil, dan mutasi saldo buku besar agar tidak ada selisih.",
      about_pillar2_title: "Administrasi Siap Audit",
      about_pillar2_desc: "Alur dokumentasi tertata rapi, jejak audit (audit trails) transparan, dan pemodelan spreadsheet terstruktur yang siap diuji kapan pun.",
      about_pillar3_title: "Integritas & Kepatuhan Kerja",
      about_pillar3_desc: "Tanggung jawab penuh dalam mengelola dana operasional dan data institusi publik, menjaga kerahasiaan, serta berkomunikasi lugas dengan tim.",
      edu_tag: "03 / PENDIDIKAN",
      edu_heading: "Fondasi Akademik & Standar Finansial",
      edu_faculty: "FAKULTAS EKONOMIKA DAN BISNIS",
      edu_program: "S1 AKUNTANSI",
      edu_period: "2022 - 2026",
      edu_narrative: "Kurikulum dirancang intensif mencakup Standar Akuntansi Keuangan (SAK), sistem pengendalian internal, perpajakan badan & pribadi, serta analisis data bisnis kuantitatif.",
      edu_gpa_caption: "IPK KUMULATIF",
      edu_gpa_scale: "SKALA 4,00 / SANGAT MEMUASKAN",
      edu_gpa_note: "Fokus perkuliahan pada penguasaan akuntansi keuangan, sistem pengendalian internal, perpajakan, dan analisis data bisnis.",
      exp_tag: "04 / PENGALAMAN KERJA",
      exp_heading: "Pengalaman Operasional Terapan",
      exp_subhead: "Pengalaman operasional nyata dalam bimbingan data kuantitatif, tata kelola kas ritel, dan rekonsiliasi harian.",
      exp1_type: "PENUGASAN AKADEMIK",
      exp1_role: "Asisten Laboratorium — Statistik Bisnis & Komputasi Digital",
      exp1_summary: "Memfasilitasi sesi praktikum statistik komputasional bagi mahasiswa, menjaga ketertiban administrasi presensi, dataset olah data, dan rekapan nilai berkala.",
      exp1_b1: "Membimbing mahasiswa dalam alur olah data statistik, validasi dataset bisnis, dan interpretasi pengujian hipotesis parametrik.",
      exp1_b2: "Menjaga integritas administratif 100% pada catatan kehadiran praktikan, penjadwalan tugas laboratorium, dan rekapitulasi nilai dosen.",
      exp1_b3: "Membantu dosen pengampu menyusun modul studi kasus numerik terapan dan simulasi analisis data ekonomi.",
      tag_biz_stat: "Statistik Bisnis",
      tag_data_ver: "Verifikasi Data",
      tag_acad_adm: "Administrasi Akademik",
      tag_inst_guide: "Bimbingan Praktikum",
      exp2_type: "PRAKTIK OPERASIONAL",
      exp2_role: "Kasir & Administrasi Transaksi Keuangan",
      exp2_org: "Operasional Transaksi Ritel",
      exp2_summary: "Mengelola perputaran kas dan pembayaran digital (QRIS/EDC) bertrafik tinggi, mempertahankan rekor zero-variance saat closing shift harian.",
      exp2_b1: "Memproses transaksi pembayaran tunai, QRIS, dan debit bervolume tinggi dengan ketelitian hitung tanpa galat.",
      exp2_b2: "Melakukan opname kas fisik laci kasir saat buka dan tutup shift; saldo fisik klop 100% dengan rekapitulasi POS harian.",
      exp2_b3: "Mencatat pengeluaran kas kecil (petty cash), memverifikasi keabsahan nota/faktur operasional, dan menyusun laporan settlement untuk evaluasi manajemen.",
      tag_cash_gov: "Pengelolaan Laci Kas",
      tag_pos_rec: "Rekonsiliasi POS",
      tag_petty_cash: "Manajemen Kas Kecil",
      tag_audit_trail: "Jejak Audit",
      intern_tag: "05 / PENGALAMAN MAGANG",
      intern_heading: "Validasi Dokumen Publik & Riset Inovasi Daerah",
      intern_inst_tag: "BADAN PERENCANAAN PEMERINTAH DAERAH",
      intern_date_tag: "JANUARI — MEI 2025",
      intern_div_prefix: "Bidang:",
      intern_div_name: "Bidang Riset dan Inovasi (BAPPERIDA Kota Magelang)",
      intern_f1_title: "Evaluasi Indeks Inovasi Daerah (IID)",
      intern_f1_desc: "Memeriksa dan menyaring puluhan proposal inovasi dari Organisasi Perangkat Daerah (OPD) se-Kota Magelang sesuai indikator penilaian regulasi Kemendagri.",
      intern_f2_title: "Uji Silang Dokumen & Kepatuhan Bukti",
      intern_f2_desc: "Menguji kesesuaian dokumen bukti fisik, menata spreadsheet data kuantitatif, dan merapikan pengarsipan digital agar seluruh parameter terpenuhi.",
      intern_f3_title: "Penyusunan Ringkasan & Bahan Evaluasi",
      intern_f3_desc: "Menyusun draf ringkasan evaluasi dan mendukung forum koordinasi lintas OPD dalam penilaian kesiapan inovasi daerah.",
      skills_tag: "06 / KEAHLIAN & KOMPETENSI",
      skills_heading: "Kompetensi Terapan & Alat Teknis",
      skills_subhead: "Keahlian praktis yang dikembangkan melalui bimbingan praktikum statistik, pengelolaan kasir ritel, dan verifikasi dokumen sektor publik.",
      cat_accounting: "AKUNTANSI & KEUANGAN",
      skill_fa_title: "Administrasi Keuangan",
      skill_fa_desc: "Pencatatan voucher sistematis, kategorisasi beban, dan pengarsipan tertib.",
      skill_cm_title: "Manajemen Kas & Rekonsiliasi",
      skill_cm_desc: "Pemeriksaan fisik kas laci, verifikasi kas kecil, dan pencocokan saldo tanpa selisih.",
      skill_tr_title: "Pencatatan Transaksi",
      skill_tr_desc: "Penjurnalan berpasangan, posting buku besar, dan penyusunan neraca saldo.",
      skill_bm_title: "Pemantauan Anggaran",
      skill_bm_desc: "Pengawasan alokasi anggaran operasional berkala terhadap realisasi belanja riil.",
      skill_fr_title: "Pelaporan Keuangan",
      skill_fr_desc: "Penyusunan draf laporan posisi keuangan, laba rugi, dan daftar rincian pendukung.",
      cat_tools: "ALAT & PERANGKAT LUNAK",
      skill_excel_desc: "VLOOKUP, XLOOKUP, PivotTable, formula logika bertingkat, dan pembersihan data.",
      skill_word_desc: "Penyusunan laporan formal, korespondensi dinas, dan dokumentasi audit.",
      skill_ppt_desc: "Penyajian data finansial yang komunikatif dan perancangan slide presentasi bersih.",
      skill_gw_desc: "Pengelolaan spreadsheet kolaboratif real-time, manajemen Google Drive, dan formulir.",
      skill_stat_title: "Perangkat Lunak Statistik",
      skill_stat_desc: "Validasi data kuantitatif, komputasi regresi, dan pengorganisasian dataset.",
      cat_practices: "ETIKA & KETERAMPILAN KERJA",
      skill_detail_title: "Ketelitian & Presisi",
      skill_detail_desc: "Teliti memeriksa kesesuaian angka, tanggal transaksi, nomor bukti pembayaran, dan saldo.",
      skill_time_title: "Manajemen Waktu",
      skill_time_desc: "Kedisiplinan tinggi dalam penutupan buku akhir periode dan tenggat instansi.",
      skill_team_title: "Kerja Sama Tim & Koordinasi",
      skill_team_desc: "Komunikasi efektif dalam kelompok akademik maupun koordinasi lintas instansi.",
      skill_lead_title: "Kepemimpinan & Bimbingan",
      skill_lead_desc: "Mengarahkan praktikan laboratorium dalam mengatasi kendala olah data.",
      skill_adapt_title: "Adaptabilitas & Pembelajar Cepat",
      skill_adapt_desc: "Cepat memahami standar akuntansi baru, sistem aplikasi kerja, dan alur operasional.",
      contact_tag: "07 / KONTAK",
      contact_heading: "Siap berkontribusi di<br><em>tim keuangan Anda.</em>",
      contact_pitch: "Saya terbuka untuk kesempatan kerja penuh waktu (full-time) maupun program management trainee pada posisi <strong>Staff Akuntansi, Finance, Perpajakan, atau Asisten Audit</strong>. Silakan hubungi saya melalui email untuk berdiskusi lebih lanjut.",
      contact_status_title: "STATUS: SIAP UNTUK KESEMPATAN KERJA",
      contact_status_desc: "Terbuka untuk posisi full-time, program management trainee, dan penugasan profesional akuntansi & audit.",
      contact_email_label: "EMAIL LANGSUNG",
      contact_copy_btn: "Salin Email",
      contact_copied: "Tersalin!",
      contact_loc_label: "LOKASI",
      contact_loc_val: "Magelang, Jawa Tengah, Indonesia (Terbuka untuk Hybrid / On-Site)",
      contact_acad_label: "LATAR PENDIDIKAN",
      contact_acad_val: "Universitas Muhammadiyah Magelang — S1 Akuntansi",
      contact_send_btn: "Kirim Undangan / Email Langsung"
    }
  };

  const MASCOT_BUBBLES = {
    en: {
      hero: ['Hi, Welcome!', 'Ready to bring value to your finance team.'],
      about: ['Zero-variance financial accuracy.', 'Every single entry must be verified & auditable.'],
      education: ['UM Magelang • S1 Accounting • GPA 3.62', 'Solid academic grounding in financial standards.'],
      experience: ['Matching cash drawers & audit trails.', 'Precision and zero variance in daily reconciliation.'],
      internship: ['BAPPERIDA Kota Magelang • Innovation', 'Empirical research & regional development data.'],
      skills: ['Spreadsheets, reporting & rigor.', 'Advanced Excel modeling and audit trails.'],
      contact: ['Let’s build something meaningful!', 'Open for full-time accounting & audit roles!']
    },
    id: {
      hero: ['Hai, Selamat Datang!', 'Siap berkontribusi di bidang akuntansi & keuangan.'],
      about: ['Ketelitian finansial tanpa selisih.', 'Setiap transaksi harus terverifikasi dan tertib.'],
      education: ['UM Magelang • S1 Akuntansi • IPK 3,62', 'Fondasi akademik yang kuat dan konsisten.'],
      experience: ['Rekonsiliasi kasir & pembukuan rapi.', 'Presisi hitung kas riil dan laporan POS harian.'],
      internship: ['BAPPERIDA Kota Magelang • Inovasi Daerah', 'Riset empiris dan verifikasi data inovasi daerah.'],
      skills: ['Spreadsheet, pelaporan & ketelitian.', 'Kemahiran Excel dan pemodelan laporan keuangan.'],
      contact: ['Mari bangun sesuatu yang bermanfaat!', 'Terbuka untuk posisi akuntansi & asisten audit!']
    }
  };

  const MASCOT_ASSETS = {
    waving: 'mascot/waving.webp',
    waving_blink: 'mascot/wave_kedip.webp',
    idle: 'mascot/idle.webp',
    blink: 'mascot/blink.webp',
    graduation: 'mascot/graduation.webp',
    calculator: 'mascot/calculator.webp',
    thinking: 'mascot/thinking.webp',
    laptop: 'mascot/laptop.webp',
    contact: 'mascot/contact.webp'
  };

  // Preload mascot assets
  const preloadedImages = {};
  ['waving_blink', 'graduation', 'calculator', 'thinking', 'contact', 'blink'].forEach((key) => {
    const img = new Image();
    img.src = MASCOT_ASSETS[key];
    preloadedImages[key] = img;
  });

  /* ==========================================================================
     02. LANGUAGE MANAGER (AUTO-DETECT + STORAGE + SEAMLESS SWAP)
     ========================================================================== */
  let currentLanguage = 'id';

  function detectLanguage() {
    // 1. Check user preference stored in localStorage (if user explicitly toggled)
    const saved = localStorage.getItem('preferred_lang');
    if (saved && (saved === 'en' || saved === 'id')) {
      return saved;
    }

    // 2. Default automatically to Indonesian (ID) on first visit
    return 'id';
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('preferred_lang', lang);

    document.documentElement.setAttribute('lang', lang);

    // Update document title and meta description
    document.title = I18N[lang].page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', I18N[lang].page_desc);
    }

    // Update all elements with data-i18n (plain text)
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang][key] !== undefined) {
        el.textContent = I18N[lang][key];
      }
    });

    // Update all elements with data-i18n-html (markup/em/br)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (I18N[lang][key] !== undefined) {
        el.innerHTML = I18N[lang][key];
      }
    });

    // Update switcher buttons UI
    const btnEn = document.getElementById('langBtnEn');
    const btnId = document.getElementById('langBtnId');
    if (btnEn && btnId) {
      if (lang === 'en') {
        btnEn.classList.add('is-active');
        btnId.classList.remove('is-active');
      } else {
        btnId.classList.add('is-active');
        btnEn.classList.remove('is-active');
      }
    }

    // Refresh active section indicator label in current language
    if (typeof updateSectionLabelI18n === 'function') {
      updateSectionLabelI18n();
    }

    // Update mascot speech bubble if open
    if (mascot && typeof mascot.updateLanguage === 'function') {
      mascot.updateLanguage(lang);
    }
  }

  // Attach click listeners to language toggle buttons
  const btnEn = document.getElementById('langBtnEn');
  const btnId = document.getElementById('langBtnId');
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnId) btnId.addEventListener('click', () => setLanguage('id'));

  /* ==========================================================================
     03. MASCOT CONTROLLER COMPONENT
     ========================================================================== */
  class MascotController {
    constructor() {
      this.container = document.getElementById('mascotController');
      this.image = document.getElementById('mascotImage');
      this.blinkOverlay = document.getElementById('mascotBlinkOverlay');
      this.stage = document.getElementById('mascotStage');
      this.bubble = document.getElementById('mascotBubble');
      this.bubbleText = document.getElementById('bubbleText');

      this.currentState = 'waving';
      this.currentSection = 'hero';
      this.isTransitioning = false;
      this.blinkTimer = null;
      this.bubbleTimer = null;
      this.isHovered = false;

      this.init();
    }

    init() {
      if (!this.container || !this.image) return;

      this.image.addEventListener('error', () => {
        if (this.image.src !== MASCOT_ASSETS.idle) {
          console.warn('[MascotController] Asset fallback to idle.webp');
          this.image.src = MASCOT_ASSETS.idle;
        }
      });

      if (this.stage) {
        // Automatic speech on mouse hover / direction
        this.stage.addEventListener('mouseenter', () => {
          this.isHovered = true;
          this.handleMascotHover();
        });

        // Graceful hide after mouse moves away
        this.stage.addEventListener('mouseleave', () => {
          this.isHovered = false;
          clearTimeout(this.bubbleTimer);
          this.bubbleTimer = setTimeout(() => {
            if (!this.isHovered && this.bubble) {
              this.bubble.classList.remove('is-visible');
            }
          }, 900);
        });

        // Interactive click / touch (cycles phrases & gives tactile press)
        this.stage.addEventListener('click', () => this.handleMascotClick());
        this.stage.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleMascotClick();
          }
        });
      }

      requestAnimationFrame(() => {
        setTimeout(() => {
          this.container.classList.add('is-ready');
          const initialBubble = this.getPhrase(false);
          this.showBubble(initialBubble, 3400);
          this.scheduleNextBlink();
        }, 220);
      });
    }

    setSection(sectionId, desiredPose) {
      const sectionChanged = (this.currentSection !== sectionId);
      if (!sectionChanged && this.currentState === desiredPose) return;

      this.currentSection = sectionId;
      const targetState = desiredPose || 'idle';

      // HERO GRAND MASCOT: Large & prominent on initial Hero section, compact corner companion elsewhere
      if (sectionId === 'hero') {
        this.container.classList.add('is-hero-mode');
      } else {
        this.container.classList.remove('is-hero-mode');
      }

      this.stopBlink();

      if (targetState === 'thinking') {
        this.container.classList.add('thinking-mode');
      } else {
        this.container.classList.remove('thinking-mode');
      }

      this.transitionTo(targetState);

      // ADAPTIVE AUTO-SPEECH ON SCROLL: Automatically pop up speech bubble
      // with the section's adaptive text whenever the user scrolls or navigates!
      if (sectionChanged) {
        const nextPhrase = this.getPhrase(false);
        this.showBubble(nextPhrase, 3600);
      }
    }

    transitionTo(nextState) {
      if (this.currentState === nextState && !this.isTransitioning) return;

      this.isTransitioning = true;
      if (this.blinkOverlay) {
        this.blinkOverlay.classList.remove('is-blinking');
      }
      const nextSrc = MASCOT_ASSETS[nextState] || MASCOT_ASSETS.idle;

      this.image.style.transition = 'opacity 160ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 160ms cubic-bezier(0.22, 0.61, 0.36, 1)';
      this.image.style.opacity = '0';
      this.image.style.transform = 'scale(0.96)';

      setTimeout(() => {
        this.image.src = nextSrc;
        this.currentState = nextState;

        requestAnimationFrame(() => {
          this.image.style.transition = 'opacity 160ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 160ms cubic-bezier(0.22, 0.61, 0.36, 1)';
          this.image.style.opacity = '1';
          this.image.style.transform = 'scale(1.02)';

          setTimeout(() => {
            this.image.style.transition = 'transform 140ms cubic-bezier(0.22, 0.61, 0.36, 1)';
            this.image.style.transform = 'scale(1)';
            this.isTransitioning = false;

            if (this.blinkOverlay) {
              const nextBlink = (this.currentState === 'waving') ? MASCOT_ASSETS.waving_blink : MASCOT_ASSETS.blink;
              this.blinkOverlay.src = nextBlink;
            }
            if (this.currentState === 'idle' || this.currentState === 'waving') {
              this.scheduleNextBlink();
            }
          }, 150);
        });
      }, 160);
    }

    scheduleNextBlink() {
      this.stopBlink();
      const state = this.currentState;
      if ((state !== 'idle' && state !== 'waving') || this.isTransitioning) return;

      // Natural random interval between blinks: 2.8s to 5.5s
      const randomInterval = 2800 + Math.random() * 2700;

      this.blinkTimer = setTimeout(() => {
        if (this.currentState !== 'idle' && this.currentState !== 'waving') return;

        this.executeBlink(() => {
          // 20% chance of cute double blink
          if (Math.random() < 0.20) {
            setTimeout(() => {
              if (this.currentState === 'idle' || this.currentState === 'waving') {
                this.executeBlink(() => this.scheduleNextBlink());
              }
            }, 100);
          } else {
            this.scheduleNextBlink();
          }
        });
      }, randomInterval);
    }

    executeBlink(callback) {
      const state = this.currentState;
      if (state !== 'idle' && state !== 'waving') return;

      const blinkSrc = (state === 'waving') ? MASCOT_ASSETS.waving_blink : MASCOT_ASSETS.blink;

      // Fast, smooth, natural blink duration: 105 - 125ms
      const blinkDuration = 105 + Math.floor(Math.random() * 20);

      if (this.blinkOverlay) {
        // Ensure overlay has the correct blink image ready
        if (this.blinkOverlay.getAttribute('src') !== blinkSrc) {
          this.blinkOverlay.src = blinkSrc;
        }

        // Instant optical frame swap with 0ms decode latency
        this.blinkOverlay.classList.add('is-blinking');

        setTimeout(() => {
          this.blinkOverlay.classList.remove('is-blinking');
          if (typeof callback === 'function') callback();
        }, blinkDuration);
      } else {
        // Fallback for single image
        const normalSrc = (state === 'waving') ? MASCOT_ASSETS.waving : MASCOT_ASSETS.idle;
        this.image.src = blinkSrc;
        setTimeout(() => {
          if (this.currentState === state) {
            this.image.src = normalSrc;
          }
          if (typeof callback === 'function') callback();
        }, blinkDuration);
      }
    }

    stopBlink() {
      if (this.blinkTimer) {
        clearTimeout(this.blinkTimer);
        this.blinkTimer = null;
      }
    }

    getPhrase(alternate = false) {
      const sectionPhrases = MASCOT_BUBBLES[currentLanguage] && MASCOT_BUBBLES[currentLanguage][this.currentSection];
      if (Array.isArray(sectionPhrases)) {
        return alternate ? sectionPhrases[1 % sectionPhrases.length] : sectionPhrases[0];
      }
      return sectionPhrases || 'Ready to bring value to your finance team.';
    }

    updateBubbleLive(newText) {
      if (!this.bubble || !this.bubbleText) return;
      if (Array.isArray(newText)) newText = newText[0];

      if (this.bubbleText.textContent === newText) return;

      // Smooth fast crossfade so text changes elegantly
      this.bubbleText.style.opacity = '0';
      setTimeout(() => {
        this.bubbleText.textContent = newText;
        this.bubbleText.style.opacity = '1';
      }, 110);

      this.bubble.classList.add('is-visible');

      clearTimeout(this.bubbleTimer);
      if (!this.isHovered) {
        this.bubbleTimer = setTimeout(() => {
          if (!this.isHovered && this.bubble) {
            this.bubble.classList.remove('is-visible');
          }
        }, 3600);
      }
    }

    showBubble(text, duration = 3600) {
      if (!this.bubble || !this.bubbleText) return;

      if (Array.isArray(text)) {
        text = text[0];
      }

      clearTimeout(this.bubbleTimer);

      // If already open with different text, smoothly crossfade
      if (this.bubble.classList.contains('is-visible') && this.bubbleText.textContent !== text) {
        this.bubbleText.style.opacity = '0';
        setTimeout(() => {
          this.bubbleText.textContent = text;
          this.bubbleText.style.opacity = '1';
        }, 110);
      } else {
        this.bubbleText.textContent = text;
        this.bubbleText.style.opacity = '1';
      }

      this.bubble.classList.add('is-visible');

      // Auto-hide after duration unless user is currently hovering on mascot
      if (!this.isHovered) {
        this.bubbleTimer = setTimeout(() => {
          if (!this.isHovered && this.bubble) {
            this.bubble.classList.remove('is-visible');
          }
        }, duration);
      }
    }

    handleMascotHover() {
      const phrase = this.getPhrase(false);
      this.showBubble(phrase, 4500);
    }

    handleMascotClick() {
      // Tactile gentle bounce on click
      this.image.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.image.style.transform = 'scale(1)';
      }, 140);

      // Speak alternate friendly line
      const phrase = this.getPhrase(true);
      this.showBubble(phrase, 3800);
    }

    updateLanguage(lang) {
      if (this.bubble && this.bubble.classList.contains('is-visible')) {
        const line = this.getPhrase(false);
        this.bubbleText.textContent = line;
      }
    }
  }

  const mascot = new MascotController();

  /* ==========================================================================
     04. ROCK-SOLID BUTTERY SMOOTH SECTION SCROLL ENGINE
     ========================================================================== */
  const sections = Array.from(document.querySelectorAll('.portfolio-section'));
  const navLinks = document.querySelectorAll('.nav-link');
  const indicatorCurrent = document.getElementById('indicatorCurrent');
  const indicatorBar = document.getElementById('indicatorBar');
  const indicatorLabel = document.getElementById('indicatorLabel');
  const tickButtons = document.querySelectorAll('.tick-btn');
  const indicatorTrackContainer = document.getElementById('indicatorTrackContainer');

  const totalSections = sections.length;
  let activeIndex = 0;
  let isAnimating = false;
  let lastScrollTime = 0;

  // Update Navigation, Counter, and Mascot states synchronously
  function updateActiveUI(index) {
    if (index < 0 || index >= totalSections) return;
    activeIndex = index;

    const targetSection = sections[index];
    const sectionId = targetSection.getAttribute('data-section') || targetSection.id;
    const mascotPose = targetSection.getAttribute('data-mascot') || 'idle';
    const sectionNum = targetSection.getAttribute('data-num') || `0${index + 1}`;
    const labelKey = targetSection.getAttribute('data-label-key') || `sec_label_0${index + 1}`;

    // 1. Sync Mascot
    if (mascot && typeof mascot.setSection === 'function') {
      mascot.setSection(sectionId, mascotPose);
    }

    // 2. Sync Nav Links
    navLinks.forEach((link) => {
      const linkTarget = link.getAttribute('data-target') || link.getAttribute('href').replace('#', '');
      if (linkTarget === sectionId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });

    // 3. Sync Fixed Section Indicator
    if (indicatorCurrent) indicatorCurrent.textContent = sectionNum;
    if (indicatorLabel) {
      indicatorLabel.textContent = (I18N[currentLanguage] && I18N[currentLanguage][labelKey]) || 'SECTION';
    }

    if (indicatorBar) {
      const progressPercent = (index / (totalSections - 1)) * 100;
      indicatorBar.style.transform = `translateY(${progressPercent * 1.08}px)`;
    }

    // 4. Sync chapter ticks
    tickButtons.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  }

  function updateSectionLabelI18n() {
    if (sections[activeIndex] && indicatorLabel) {
      const labelKey = sections[activeIndex].getAttribute('data-label-key') || `sec_label_0${activeIndex + 1}`;
      indicatorLabel.textContent = (I18N[currentLanguage] && I18N[currentLanguage][labelKey]) || 'SECTION';
    }
  }

  // Smoothly navigate to a specific section without JS frame-stutter
  function goToSection(index) {
    if (index < 0) index = 0;
    if (index >= totalSections) index = totalSections - 1;

    const targetSection = sections[index];
    if (!targetSection) return;

    isAnimating = true;
    lastScrollTime = Date.now();

    updateActiveUI(index);

    // Use native browser smooth scroll (runs on GPU compositor thread at 120/144Hz)
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Release animation lock once motion settles
    setTimeout(() => {
      isAnimating = false;
    }, 550);
  }

  /* --------------------------------------------------------------------------
     Wheel Event Handling (Desktop) — Smart Section Boundary & Natural Reading
     -------------------------------------------------------------------------- */
  window.addEventListener('wheel', (e) => {
    // Only apply on desktop / wide screens
    if (window.innerWidth <= 900) return;

    // Filter out tiny trackpad drift
    if (Math.abs(e.deltaY) < 20) return;

    const now = Date.now();

    // Absorb extra wheel/trackpad ticks during programmatic motion
    if (isAnimating || (now - lastScrollTime < 550)) {
      e.preventDefault();
      return;
    }

    const currentSection = sections[activeIndex];
    if (currentSection) {
      const rect = currentSection.getBoundingClientRect();
      const winH = window.innerHeight;

      // When scrolling DOWN: if current section extends below viewport,
      // allow user to scroll down naturally to read every detail!
      if (e.deltaY > 0) {
        if (rect.bottom > winH + 18) {
          return; // Allow natural scroll within section
        }
      }
      // When scrolling UP: if top of section is still above viewport,
      // allow user to scroll up naturally within section!
      else if (e.deltaY < 0) {
        if (rect.top < -18) {
          return; // Allow natural scroll within section
        }
      }
    }

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIdx = activeIndex + direction;

    if (nextIdx >= 0 && nextIdx < totalSections) {
      e.preventDefault();
      goToSection(nextIdx);
    }
  }, { passive: false });

  /* --------------------------------------------------------------------------
     Keyboard Navigation (Arrows, PageDown/Up, Space, Home, End)
     -------------------------------------------------------------------------- */
  window.addEventListener('keydown', (e) => {
    if (window.innerWidth <= 900) return;
    if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

    const now = Date.now();
    if (now - lastScrollTime < 450) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      if (activeIndex < totalSections - 1) {
        goToSection(activeIndex + 1);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (activeIndex > 0) {
        goToSection(activeIndex - 1);
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSection(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSection(totalSections - 1);
    }
  });

  /* --------------------------------------------------------------------------
     Link Click Interception (Nav links, Buttons, Scroll Cue)
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').replace('#', '');
      const targetSec = document.getElementById(targetId);
      if (targetSec) {
        e.preventDefault();
        const targetIdx = sections.indexOf(targetSec);
        if (targetIdx !== -1) {
          goToSection(targetIdx);
        } else {
          targetSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     Interactive Section Indicator Ticks & Track Click
     -------------------------------------------------------------------------- */
  tickButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToSection(idx);
      }
    });
  });

  if (indicatorTrackContainer) {
    indicatorTrackContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('tick-btn')) return;
      const rect = indicatorTrackContainer.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const ratio = Math.max(0, Math.min(1, clickY / rect.height));
      const targetIdx = Math.round(ratio * (totalSections - 1));
      goToSection(targetIdx);
    });
  }

  /* --------------------------------------------------------------------------
     Scrollbar Drag Sync via IntersectionObserver
     -------------------------------------------------------------------------- */
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    if (isAnimating) return; // Ignore while programmatic smooth scroll is active

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const target = entry.target;
        const idx = sections.indexOf(target);
        if (idx !== -1 && idx !== activeIndex) {
          updateActiveUI(idx);
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  // Sync section index on initial page load / refresh
  function syncInitialPosition() {
    const currentY = window.scrollY || document.documentElement.scrollTop;
    let closestIdx = 0;
    let minDistance = Infinity;

    sections.forEach((sec, idx) => {
      const diff = Math.abs(sec.offsetTop - currentY);
      if (diff < minDistance) {
        minDistance = diff;
        closestIdx = idx;
      }
    });

    updateActiveUI(closestIdx);
  }
  syncInitialPosition();

  /* ==========================================================================
     05. CUSTOM LEGO STUD CURSOR (Desktop Fine Pointers)
     ========================================================================== */
  const cursor = document.getElementById('customCursor');

  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let cursorVisible = false;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!cursorVisible) {
        cursorVisible = true;
        cursor.style.opacity = '1';
      }
    });

    window.addEventListener('pointerleave', () => {
      cursorVisible = false;
      cursor.style.opacity = '0';
    });

    window.addEventListener('pointerdown', () => {
      document.body.classList.add('cursor-active');
    });

    window.addEventListener('pointerup', () => {
      document.body.classList.remove('cursor-active');
    });

    const updateCursor = () => {
      currentX += (mouseX - currentX) * 0.35;
      currentY += (mouseY - currentY) * 0.35;

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      requestAnimationFrame(updateCursor);
    };
    requestAnimationFrame(updateCursor);

    const interactiveSelectors = 'a, button, input, textarea, [role="button"], .exp-row, .course-cell, .tick-btn, .lang-btn';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  /* ==========================================================================
     06. COPY EMAIL FUNCTIONALITY
     ========================================================================== */
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyLabel = document.getElementById('copyLabel');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email') || 'nurvitaoctaviani@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.classList.add('is-copied');
        const copiedText = (I18N[currentLanguage] && I18N[currentLanguage].contact_copied) || 'Copied!';
        if (copyLabel) copyLabel.textContent = copiedText;

        setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          const originalText = (I18N[currentLanguage] && I18N[currentLanguage].contact_copy_btn) || 'Copy Email';
          if (copyLabel) copyLabel.textContent = originalText;
        }, 2200);
      } catch (err) {
        window.prompt('Copy email address:', email);
      }
    });
  }

  /* ==========================================================================
     07. MOBILE & TABLET NAVIGATION DRAWER + RESPONSIVE ENHANCEMENTS
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const siteNav = document.getElementById('siteNav');
  const navBackdrop = document.getElementById('navBackdrop');

  function openMobileNav() {
    if (!siteNav || !mobileToggle) return;
    siteNav.classList.add('is-open');
    mobileToggle.classList.add('is-active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    if (navBackdrop) navBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('nav-open');
  }

  function closeMobileNav() {
    if (!siteNav || !mobileToggle) return;
    siteNav.classList.remove('is-open');
    mobileToggle.classList.remove('is-active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    if (navBackdrop) navBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
    document.body.classList.remove('nav-open');
  }

  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close on any nav link click
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Close when tapping outside (backdrop)
    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileNav);
    }

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        closeMobileNav();
      }
    });

    // Auto-close on viewport resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && siteNav.classList.contains('is-open')) {
        closeMobileNav();
      }
    });
  }

  /* --------------------------------------------------------------------------
     Mascot Mobile Auto-Dimming on Active Scroll (Never blocks reading)
     -------------------------------------------------------------------------- */
  const mascotEl = document.getElementById('mascotController');
  let mobileScrollTimer = null;

  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 900 && mascotEl) {
      mascotEl.classList.add('mobile-scrolling');
      clearTimeout(mobileScrollTimer);
      mobileScrollTimer = setTimeout(() => {
        mascotEl.classList.remove('mobile-scrolling');
      }, 350);
    }
  }, { passive: true });

  /* ==========================================================================
     08. INITIALIZE DETECTED LANGUAGE
     ========================================================================== */
  const initialLang = detectLanguage();
  setLanguage(initialLang);
});

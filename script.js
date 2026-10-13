/**
 * ==========================================================================
 * PT FIBERTERRA NETWORK — OFFICIAL CORPORATE SCRIPT
 * Production Frontend Architecture & Interactive Components
 * ==========================================================================
 */

'use strict';

// --- Global Configuration (Single Source of Truth) ---
const APP_CONFIG = {
  company: {
    legalName: "PT FIBERTERRA NETWORK",
    brandName: "FiberTerra",
    tagline: "Koneksi Fiber untuk Masa Depan",
    ecosystemPartner: "PT Acehlink Media",
    ecosystemYear: 2010
  },
  contact: {
    email: "info@acehlink.id",
    phone: "(0651) 7315246",
    whatsappDisplay: "+62 853 6086 1861",
    whatsappClean: "6285360861861",
    address: "Jl. Syiah Kuala No. 10D, Bandar Baru, Kuta Alam, Banda Aceh 23125"
  },
  plans: [
    {
      id: "paket-1",
      name: "Paket 1",
      speed: "30 Mbps",
      speedVal: 30,
      priceMonth: 200000,
      priceDisplay: "Rp 200.000",
      installFee: "Rp 100.000",
      quota: "Unlimited Non-FUP",
      router: "Termasuk Modem Router Wi-Fi",
      category: "residensial",
      recommendedFor: "Keluarga kecil (1–4 perangkat), browsing, sosial media, & video HD.",
      features: [
        "Kecepatan simetris / stabil hingga 30 Mbps",
        "Unlimited kuota tanpa penurunan FUP",
        "Perangkat modem Wi-Fi disertakan",
        "Dukungan teknis responsif",
        "Biaya pasang awal Rp 100.000"
      ]
    },
    {
      id: "paket-2",
      name: "Paket 2",
      speed: "50 Mbps",
      speedVal: 50,
      priceMonth: 300000,
      priceDisplay: "Rp 300.000",
      installFee: "Rp 100.000",
      quota: "Unlimited Non-FUP",
      router: "Termasuk Modem Router Wi-Fi",
      category: "residensial",
      isPopular: true,
      badgeText: "PILIHAN POPULER",
      recommendedFor: "Keluarga aktif (5–8 perangkat), streaming 4K, video conference, & WFH.",
      features: [
        "Kecepatan stabil hingga 50 Mbps",
        "Unlimited kuota tanpa penurunan FUP",
        "Perangkat modem Wi-Fi disertakan",
        "Optimal untuk hiburan & multitasking",
        "Biaya pasang awal Rp 100.000"
      ]
    },
    {
      id: "paket-3",
      name: "Paket 3",
      speed: "100 Mbps",
      speedVal: 100,
      priceMonth: 888000,
      priceDisplay: "Rp 888.000",
      installFee: "Rp 100.000",
      quota: "Unlimited Non-FUP",
      router: "Termasuk Modem Router Wi-Fi",
      category: "bisnis",
      recommendedFor: "Kafe, restoran, ruko, & kantor operasional 10–15 perangkat.",
      features: [
        "Kecepatan tinggi hingga 100 Mbps",
        "Unlimited kuota tanpa batas pemakaian",
        "Perangkat modem Wi-Fi performa tinggi",
        "Konektivitas multi-user stabil",
        "Biaya pasang awal Rp 100.000"
      ]
    },
    {
      id: "paket-4",
      name: "Paket 4",
      speed: "150 Mbps",
      speedVal: 150,
      priceMonth: 1221000,
      priceDisplay: "Rp 1.221.000",
      installFee: "Rp 100.000",
      quota: "Unlimited Non-FUP",
      router: "Termasuk Modem Router Wi-Fi",
      category: "bisnis",
      recommendedFor: "Perkantoran, studio kreatif, & operasional cloud intensif.",
      features: [
        "Kecepatan premium hingga 150 Mbps",
        "Unlimited kuota Non-FUP penuh",
        "Perangkat modem Wi-Fi dual-band",
        "Dukungan penanganan jaringan prioritas",
        "Biaya pasang awal Rp 100.000"
      ]
    }
  ],
  tvAddons: [
    { name: "Paket Televisi Basic", tier: "BASIC", price: "Rp 50.000", desc: "Saluran TV esensial nasional & berita keluarga." },
    { name: "Paket Televisi Silver", tier: "SILVER", price: "Rp 70.000", desc: "Koleksi hiburan, anak, edukasi, & film keluarga." },
    { name: "Paket Televisi Gold", tier: "GOLD", price: "Rp 100.000", desc: "Akses lengkap hiburan, olahraga, film box office, & dunia." }
  ],
  coverageSample: {
    regencies: {
      "Banda Aceh": ["Kuta Alam", "Baiturrahman", "Syiah Kuala", "Meuraxa", "Ulee Kareng", "Banda Raya", "Jaya Baru", "Lueng Bata", "Kuta Raja"],
      "Aceh Besar": ["Darul Imarah", "Ingin Jaya", "Krueng Barona Jaya", "Peukan Bada", "Blang Bintang", "Montasik", "Lhoknga"],
      "Sabang": ["Sukakarya", "Sukajaya"],
      "Pidie": ["Kota Sigli", "Mutiara", "Pidie"]
    }
  }
};

// --- DOM Ready Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initCoverageChecker();
  initPlansInteractions();
  initFaqAccordion();
  initLeadForm();
  initModals();
  initScrollAnimations();
  initBackToTop();
  updateDynamicYear();
});

/* ==========================================================================
   1. NAVBAR & HEADER INTERACTIONS
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-actions a');

  if (!hamburgerBtn || !drawer) return;

  const toggleDrawer = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburgerBtn.addEventListener('click', () => toggleDrawer());

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleDrawer(false);
      hamburgerBtn.focus();
    }
  });
}

/* ==========================================================================
   3. SCROLL SPY (ACTIVE NAV LINK)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !desktopLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   4. NETWORK COVERAGE CHECKER
   ========================================================================== */
function initCoverageChecker() {
  const regencySelect = document.getElementById('cov-regency');
  const districtSelect = document.getElementById('cov-district');
  const checkBtn = document.getElementById('cov-submit-btn');
  const resultBox = document.getElementById('cov-result-box');
  const addressInput = document.getElementById('cov-address');
  const form = document.getElementById('coverage-checker-form');

  if (!regencySelect || !districtSelect || !form) return;

  // Populate Regencies
  const regencies = Object.keys(APP_CONFIG.coverageSample.regencies);
  regencySelect.innerHTML = '<option value="">-- Pilih Kabupaten / Kota --</option>';
  regencies.forEach(reg => {
    const opt = document.createElement('option');
    opt.value = reg;
    opt.textContent = reg;
    regencySelect.appendChild(opt);
  });

  // Update Districts on Regency Change
  regencySelect.addEventListener('change', () => {
    const selectedReg = regencySelect.value;
    districtSelect.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';

    if (selectedReg && APP_CONFIG.coverageSample.regencies[selectedReg]) {
      districtSelect.disabled = false;
      APP_CONFIG.coverageSample.regencies[selectedReg].forEach(dist => {
        const opt = document.createElement('option');
        opt.value = dist;
        opt.textContent = dist;
        districtSelect.appendChild(opt);
      });
    } else {
      districtSelect.disabled = true;
    }
  });

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const regency = regencySelect.value;
    const district = districtSelect.value;
    const address = addressInput.value.trim();

    if (!regency || !district || !address) {
      alert("Mohon lengkapi Kabupaten/Kota, Kecamatan, dan Alamat/Patokan lokasi Anda.");
      return;
    }

    // Button loading state
    const originalText = checkBtn.innerHTML;
    checkBtn.disabled = true;
    checkBtn.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-dasharray="32" stroke-linecap="round"></circle>
      </svg>
      <span>Memverifikasi Jalur Optik...</span>
    `;

    setTimeout(() => {
      checkBtn.disabled = false;
      checkBtn.innerHTML = originalText;

      // Render Feedback
      renderCoverageResult(regency, district, address);
    }, 600);
  });
}

function renderCoverageResult(regency, district, address) {
  const resultBox = document.getElementById('cov-result-box');
  if (!resultBox) return;

  resultBox.innerHTML = `
    <div style="display: flex; align-items: flex-start; gap: 1rem;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: #ECFDF5; color: #059669; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <div style="flex-grow: 1;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.4rem;">
          <h4 style="font-size: 1.1rem; font-weight: 800; color: #0B1F3A;">Wilayah ${district}, ${regency} Berada Dalam Klaster Jaringan</h4>
          <span style="font-size: 0.75rem; font-weight: 700; background: #EBF3FD; color: #1769E0; padding: 0.2rem 0.6rem; border-radius: 9999px;">Tahap Verifikasi Lapangan</span>
        </div>
        <p style="font-size: 0.875rem; color: #475467; line-height: 1.6; margin-bottom: 1rem;">
          Alamat: <strong>${address}</strong>. Indikasi awal menunjukkan area ini masuk dalam jangkauan pengembangan jalur FTTH FiberTerra. Untuk memastikan jarak tarikan kabel drop optic ke tiang FAT/ODP terdekat, tim teknisi kami siap melakukan konfirmasi titik koordinat.
        </p>
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <button type="button" class="btn btn-primary btn-sm" onclick="forwardLocationToLead('${district}, ${regency}', '${address.replace(/'/g, "\\'")}')">
            <span>Daftar / Konsultasi Pemasangan di Wilayah Ini</span>
            <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <a href="https://wa.me/${APP_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(`Halo Sales FiberTerra, saya ingin cek ketersediaan tiang internet di ${district}, ${regency}. Alamat: ${address}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <span>Chat WhatsApp Sales Langsung</span>
          </a>
        </div>
      </div>
    </div>
  `;

  resultBox.classList.add('is-visible');
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

window.forwardLocationToLead = function(regionText, addressText) {
  const regionInput = document.getElementById('lead-region');
  const notesInput = document.getElementById('lead-notes');
  const contactSection = document.getElementById('kontak');

  if (regionInput) regionInput.value = regionText;
  if (notesInput) notesInput.value = `Lokasi pemasangan: ${addressText}`;

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('lead-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 600);
  }
};

/* ==========================================================================
   5. PLANS INTERACTIONS & FILTERING
   ========================================================================== */
function initPlansInteractions() {
  const filterBtns = document.querySelectorAll('.plan-filter-btn');
  const planCards = document.querySelectorAll('.plan-card');
  const tvSection = document.querySelector('.tv-addons-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (filter === 'all') {
        planCards.forEach(c => c.style.display = 'flex');
        if (tvSection) tvSection.style.display = 'block';
      } else if (filter === 'tv') {
        planCards.forEach(c => c.style.display = 'none');
        if (tvSection) tvSection.style.display = 'block';
      } else {
        planCards.forEach(c => {
          c.style.display = c.dataset.category === filter ? 'flex' : 'none';
        });
        if (tvSection) tvSection.style.display = 'none';
      }
    });
  });

  // Package Selection Buttons (Pre-fills lead form)
  const selectPlanBtns = document.querySelectorAll('[data-select-plan]');
  selectPlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.dataset.selectPlan;
      selectPlanInLeadForm(planName);
    });
  });
}

function selectPlanInLeadForm(planName) {
  const planSelect = document.getElementById('lead-plan');
  const contactSection = document.getElementById('kontak');

  if (planSelect) {
    for (let i = 0; i < planSelect.options.length; i++) {
      if (planSelect.options[i].text.includes(planName) || planSelect.options[i].value === planName) {
        planSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('lead-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 600);
  }
}

/* ==========================================================================
   6. ACCESSIBLE FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('is-open')) {
          other.classList.remove('is-open');
          const otherTrigger = other.querySelector('.faq-trigger');
          const otherContent = other.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });

    // Keyboard support: Enter / Space
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}

/* ==========================================================================
   7. CONTACT & SALES LEAD FORM VALIDATION & HANDLING
   ========================================================================== */
function initLeadForm() {
  const form = document.getElementById('lead-registration-form');
  const feedbackBox = document.getElementById('lead-form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#lead-name').value.trim();
    const phone = form.querySelector('#lead-phone').value.trim();
    const email = form.querySelector('#lead-email').value.trim();
    const region = form.querySelector('#lead-region').value.trim();
    const type = form.querySelector('#lead-type').value;
    const plan = form.querySelector('#lead-plan').value;
    const notes = form.querySelector('#lead-notes').value.trim();
    const agree = form.querySelector('#lead-agree').checked;

    // Indonesian Phone Validation (starts with 08 or +62 or 62, min 10 digits)
    const phoneClean = phone.replace(/[\s\-\(\)]/g, '');
    const isIndoPhone = /^(08|\+628|628)\d{8,12}$/.test(phoneClean);

    if (!name || name.length < 3) {
      showFormFeedback('error', 'Silakan masukkan nama lengkap yang valid (minimal 3 karakter).');
      return;
    }

    if (!isIndoPhone) {
      showFormFeedback('error', 'Nomor WhatsApp tidak valid. Format yang disarankan: 0812xxxxxxxx atau +62812xxxxxxxx.');
      return;
    }

    if (!region) {
      showFormFeedback('error', 'Silakan isi wilayah atau kecamatan lokasi pemasangan.');
      return;
    }

    if (!agree) {
      showFormFeedback('error', 'Anda harus menyetujui ketentuan privasi untuk melanjutkan pengajuan.');
      return;
    }

    // Submit Simulation
    const submitBtn = form.querySelector('#lead-submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-dasharray="32" stroke-linecap="round"></circle>
      </svg>
      <span>Memproses Pengajuan...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const refId = 'FT-' + Math.floor(100000 + Math.random() * 900000);
      const waText = encodeURIComponent(
        `Halo PT FIBERTERRA NETWORK (Sales),\n` +
        `Saya ingin mengajukan registrasi berlangganan internet:\n\n` +
        `• No. Referensi: ${refId}\n` +
        `• Nama: ${name}\n` +
        `• No. WhatsApp: ${phone}\n` +
        `• Wilayah: ${region}\n` +
        `• Kategori: ${type === 'bisnis' ? 'Usaha & Bisnis' : 'Rumah Tangga'}\n` +
        `• Pilihan Paket: ${plan || 'Belum Ditentukan'}\n` +
        `• Catatan Lokasi: ${notes || '-'}\n\n` +
        `Mohon konfirmasi ketersediaan tiang dan jadwal instalasi. Terima kasih!`
      );

      const waUrl = `https://wa.me/${APP_CONFIG.contact.whatsappClean}?text=${waText}`;

      showFormFeedback('success', `
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="font-weight: 800; font-size: 1rem;">Pengajuan Anda Berhasil Diterima! (Ref: ${refId})</div>
          <div>Terima kasih Bapak/Ibu <strong>${name}</strong>. Tim sales FiberTerra akan memverifikasi data dan menghubungi nomor WhatsApp Anda.</div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.25rem;">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="background: #25D366; border-color: #25D366;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>Kirim Rincian Langsung via WhatsApp Sales</span>
            </a>
            <button type="button" class="btn btn-secondary btn-sm" onclick="resetLeadForm()">Kirim Pengajuan Baru</button>
          </div>
        </div>
      `);

      form.reset();
    }, 800);
  });
}

function showFormFeedback(type, messageHtml) {
  const box = document.getElementById('lead-form-feedback');
  if (!box) return;

  box.className = `form-feedback-alert ${type}`;
  box.innerHTML = messageHtml;
  box.style.display = 'block';
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

window.resetLeadForm = function() {
  const box = document.getElementById('lead-form-feedback');
  if (box) box.style.display = 'none';
};

/* ==========================================================================
   8. MODALS & LIGHTBOX (OFFICIAL PRICELIST & LEGAL)
   ========================================================================== */
function initModals() {
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const overlays = document.querySelectorAll('.modal-overlay');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.dataset.openModal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(m => {
        if (m.classList.contains('is-active')) {
          m.classList.remove('is-active');
          document.body.style.overflow = '';
        }
      });
    }
  });
}

/* ==========================================================================
   9. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  // If user prefers reduced motion, skip animations
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-up-element').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const animElements = document.querySelectorAll('.fade-up-element');
  if (!animElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  animElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   10. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   11. DYNAMIC YEAR
   ========================================================================== */
function updateDynamicYear() {
  const yearSpans = document.querySelectorAll('.dynamic-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });
}


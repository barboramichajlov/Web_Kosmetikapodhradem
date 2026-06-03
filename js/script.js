'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* --- DOM reference --- */
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  /* --- Aktivni nav-link (definovano jako prvni, pouziva se v onScroll) --- */
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const allLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function highlightActiveLink() {
    const mid = window.scrollY + window.innerHeight / 3;
    let cur = '';
    sections.forEach(s => { if (mid >= s.offsetTop) cur = s.id; });
    allLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  }

  /* --- Scroll efekt navbaru --- */
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    highlightActiveLink();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Okamzite zobrazeni obsahu (js-loaded aktivuje animace, ale vzdy po Observer) --- */
  document.body.classList.add('js-loaded');

  /* --- Hamburger menu --- */
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  document.querySelectorAll('.mobile-menu .nav-link').forEach(l => l.addEventListener('click', closeMenu));

  /* --- Smooth scroll --- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - navbar.offsetHeight - 12, behavior: 'smooth' });
    });
  });

  /* --- Scroll-reveal: Observer ihned oznaci prvky v pohledu jako visible --- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    /* Fallback: bez IO vse zobrazit hned */
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* --- Lightbox --- */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { if (lightboxImg) lightboxImg.src = ''; }, 350);
  };

  document.querySelectorAll('.galerie-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img || !lightbox) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') item.click(); });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  /* --- Image accordion – služby --- */
  const imgAccPanels = document.querySelectorAll('.img-acc-panel');
  imgAccPanels.forEach(panel => {
    const activate = () => {
      imgAccPanels.forEach(p => p.classList.remove('img-acc-panel--active'));
      panel.classList.add('img-acc-panel--active');
    };
    panel.addEventListener('mouseenter', activate);
    panel.addEventListener('click', activate);
    panel.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });

  /* --- Počítadlo (count-up) --- */
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length && 'IntersectionObserver' in window) {
    const countUp = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const stepMs = 16;
      const increment = target / (duration / stepMs);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, stepMs);
    };
    const counterIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { countUp(e.target); counterIo.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => counterIo.observe(c));
  }

  /* --- Klavesnice Escape --- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); closeLightbox(); }
  });

  /* --- Cookie lista --- */
  const cookieBar    = document.getElementById('cookie-bar');
  const cookieAccept = document.getElementById('cookie-accept');
  if (cookieBar && !localStorage.getItem('kph-cookies')) {
    setTimeout(() => cookieBar.classList.add('visible'), 1500);
  }
  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('kph-cookies', '1');
      cookieBar.classList.remove('visible');
    });
  }

  /* --- Kontaktni formular (honeypot) --- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const hp = form.querySelector('[name="website"]');
      if (hp && hp.value !== '') return;
      form.style.display = 'none';
      const ok = document.getElementById('form-success');
      if (ok) ok.style.display = 'block';
    });
  }

});
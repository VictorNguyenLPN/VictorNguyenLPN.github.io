/* ============================================================
   VICTOR NGUYEN PORTFOLIO — script.js
   Handles: sticky nav, mobile menu, scroll-reveal, active links
   ============================================================ */

(function () {
  'use strict';

  /* ── ELEMENTS ───────────────────────────────────────────── */
  const header    = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  const allLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id], div[id="hero"]');
  const reveals   = document.querySelectorAll('.reveal');
  const hero      = document.querySelector('.hero');

  /* ── STICKY NAV ─────────────────────────────────────────── */
  function updateHeader() {
    const heroBottom = hero ? hero.offsetTop + hero.offsetHeight - header.offsetHeight : 0;
    const inHero = hero ? window.scrollY < heroBottom : false;

    header.classList.toggle('is-solid', !inHero);

    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ── MOBILE MENU ─────────────────────────────────────────── */
  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target) && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ── SCROLL REVEAL ──────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: just show everything
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ── HERO GRID CELL ────────────────────────────────────── */
  if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const cellCount = 16;
    const cells = [];

    function moveCell(cell) {
      const gridSize = 44;
      const maxX = Math.max(0, Math.floor((hero.clientWidth - gridSize) / gridSize));
      const maxY = Math.max(0, Math.floor((hero.clientHeight - gridSize) / gridSize));
      const cellX = Math.floor(Math.random() * (maxX + 1));
      const cellY = Math.floor(Math.random() * (maxY + 1));

      cell.style.left = (cellX * gridSize) + 'px';
      cell.style.top = (cellY * gridSize) + 'px';
    }

    for (let index = 0; index < cellCount; index += 1) {
      const cell = document.createElement('div');
      cell.className = 'hero-grid-cell';
      cell.setAttribute('aria-hidden', 'true');
      cell.style.setProperty('--cell-speed', (2.4 + Math.random() * 1.1).toFixed(2) + 's');
      cell.style.animationDelay = (-Math.random() * 2.2).toFixed(2) + 's';
      hero.appendChild(cell);
      cells.push(cell);
      moveCell(cell);

      const refreshCell = function () {
        moveCell(cell);
      };

      setInterval(refreshCell, 1800 + Math.random() * 1600);
    }

    window.addEventListener('resize', function () {
      cells.forEach(function (cell) {
        moveCell(cell);
      });
    }, { passive: true });
  }

  /* ── ACTIVE NAV LINK ────────────────────────────────────── */
  const sectionList = Array.from(document.querySelectorAll(
    '#hero, #about, #research, #publications, #projects, #experience, #skills, #contact'
  ));

  function getActiveSection() {
    const scrollY = window.scrollY + 80; // offset for nav height
    let active = sectionList[0];
    sectionList.forEach(function (sec) {
      if (sec && sec.offsetTop <= scrollY) {
        active = sec;
      }
    });
    return active;
  }

  function updateActiveLink() {
    const active = getActiveSection();
    if (!active) return;
    const id = active.id;
    allLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ── SMOOTH SCROLL OFFSET ───────────────────────────────── */
  // Override browser smooth-scroll to account for sticky nav
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const navH = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── KEYBOARD ACCESSIBILITY ─────────────────────────────── */
  navToggle.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });

  document.querySelectorAll(".doi-copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const doi = btn.dataset.doi;

    try {
      await navigator.clipboard.writeText(doi);

      const original = btn.innerHTML;

      btn.classList.add("copied");
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17L4 12"></path>
        </svg>
        Copied!
      `;

      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = original;
      }, 2000);

    } catch (err) {
      console.error("Failed to copy DOI:", err);
    }
  });
});

})();



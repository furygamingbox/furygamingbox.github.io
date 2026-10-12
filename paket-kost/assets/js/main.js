(() => {
  'use strict';
  const menuBtn = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#main-nav');
  menuBtn?.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    nav.classList.toggle('open', open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); menuBtn?.setAttribute('aria-expanded', 'false');
  }));
  document.querySelector('#year').textContent = String(new Date().getFullYear());
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: 0.09});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  // source is included in WhatsApp text; no personal or tracking data is stored in the browser.
  const rawSource = new URLSearchParams(location.search).get('src');
  const source = rawSource === 'kost' ? 'QR kost' : rawSource === 'umum' ? 'QR umum' : 'Website';
  document.querySelectorAll('.booking-link').forEach(link => {
    const packageName = link.dataset.paket || 'Paket PS4 portable';
    const message = `Halo, saya mau tanya ketersediaan rental PS4 box.\n\nPaket: ${packageName}\n\nSumber: ${source}\n\nTanggal sewa yang diinginkan: `;
    link.href = 'https://wa.me/6282244281488?text=' + encodeURIComponent(message);
    link.target = '_blank'; link.rel = 'noopener noreferrer';
  });
})();

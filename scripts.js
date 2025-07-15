/* main.js */

/* Block 1 – AOS + Scroll Goodies */
AOS.init({ duration: 800, once: true });

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* Sticky / scrolled header */
const header = document.querySelector('header');
const heroEl = document.querySelector('#hero');               // may be null
const triggerHeight = heroEl ? heroEl.offsetHeight : 50;      // fallback

function toggleHeader() {
  if (window.scrollY > triggerHeight) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', toggleHeader);
toggleHeader();

/* Block 2 – Headless CMS content (mock) */
async function fetchAndRenderContent() {
  // Fetch real data here…
  const data = {
    home_hero_title: "Step Right Up to the Digital Big Top",
    home_hero_subtitle: "Wild web dreams ↦ reality (nightmares on request).",
    services_title: "Our Spectacular Services",
    service_title_1: "Web Design",
    service_description_1: "So stunning your visitors will question life choices.",
    /* …add the rest of your keys here… */
    footer_disclaimer: "Warning: prolonged exposure may cause creativity."
  };

  document.querySelectorAll('[data-cms-id]').forEach(el => {
    const id = el.getAttribute('data-cms-id');
    if (data[id]) {
      if (el.tagName === 'IMG') el.src = data[id];
      else el.innerHTML = data[id];
    }
  });
}
fetchAndRenderContent();

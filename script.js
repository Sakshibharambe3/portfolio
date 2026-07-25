/* ── Dark / Light Toggle ── */
const themeBtn  = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const html      = document.documentElement;

themeBtn.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

/* ── Mobile Hamburger ── */
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
});

function closeMenu() { 
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.remove('open'); 
}

/* ── Typing Animation ── */
const phrases = [
  'Software Engineer',
  'AI & ML Engineer',
  'Full Stack Developer',
  'Data Engineer',
];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = phrases[pi];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++ci);
    if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typedEl.textContent = current.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

/* ── Scroll Reveal ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

/* ── Accordion ── */
function toggleAcc(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── Flip Cards ── */
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    const isFlipped = this.classList.contains('flipped');
    document.querySelectorAll('.flip-card').forEach(c => c.classList.remove('flipped'));
    if (!isFlipped) this.classList.add('flipped');
  });
});

// click outside to flip back
document.addEventListener('click', function(e) {
  if (!e.target.closest('.flip-card')) {
    document.querySelectorAll('.flip-card').forEach(c => c.classList.remove('flipped'));
  }
});

/* ── Experience Scroll Buttons ── */
function scrollExp(direction) {
  const container = document.getElementById('expScroll');
  container.scrollBy({ left: direction * 400, behavior: 'smooth' });
  setTimeout(updateScrollBtns, 400);
}

function updateScrollBtns() {
  const container = document.getElementById('expScroll');
  const leftBtn   = document.querySelector('.scroll-btn.left');
  const rightBtn  = document.querySelector('.scroll-btn.right');
  const atStart   = container.scrollLeft <= 0;
  const atEnd     = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

  leftBtn.style.visibility  = atStart ? 'hidden' : 'visible';
  rightBtn.style.visibility = atEnd   ? 'hidden' : 'visible';
}

window.addEventListener('load', updateScrollBtns);
document.getElementById('expScroll')?.addEventListener('scroll', updateScrollBtns);

/* ── Scroll to top on reload ── */
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
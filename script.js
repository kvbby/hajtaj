// Toggle menu on small screens
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});

// Simple form submit handler - tylko alert, bo brak backendu
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
  form.reset();
});

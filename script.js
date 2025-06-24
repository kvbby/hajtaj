// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('show');
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Sprawdź lokalne ustawienia
if(localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if(body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Fade-in sekcji przy scrollu
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

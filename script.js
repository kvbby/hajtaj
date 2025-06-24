const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const navList = navMenu.querySelector('.nav-list');
  navList.classList.toggle('show');
});

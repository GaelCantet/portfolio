const toggleMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
  toggleMenu.classList.toggle('menu-open');
});
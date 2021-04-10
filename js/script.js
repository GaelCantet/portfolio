const toggleMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
  if(toggleMenu.classList.contains('menu-closed')){
    toggleMenu.classList.remove('menu-closed');
    toggleMenu.classList.add('menu-open');
  } else {
    toggleMenu.classList.remove('menu-open');
    toggleMenu.classList.add('menu-closed');
  }
});
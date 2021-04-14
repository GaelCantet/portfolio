const toggleMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
  toggleMenu.classList.toggle('menu-open');
});


function checkValid(param) {
  var pattern = RegExp(param.getAttribute('pattern'));
  var check = pattern.test(param.value);
  if(check == false) {
    param.style.outline = ".1rem solid #F43030";
  } else {
    param.style.outline = ".1rem solid #5fb4a2";
  }
}




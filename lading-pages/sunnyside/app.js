const hamburger__menu = document.getElementById('menu-toggle');
const mobile__links = document.getElementById('links-mobile');

hamburger__menu.addEventListener('click', () => {
  mobile__links.classList.toggle('hide');
});

const openMenuButton = document.getElementById('open-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenuOptions = document.getElementById('mobile-menu-list').querySelectorAll('li');

const openMobileMenu = () => {
  document.getElementById('mobile-menu').classList.add('show');
  document.getElementById('header').classList.add('blur');
  document.getElementById('main').classList.add('blur');
};

const closeMobileMenu = () => {
  document.getElementById('mobile-menu').classList.remove('show');
  document.getElementById('header').classList.remove('blur');
  document.getElementById('main').classList.remove('blur');
};

openMenuButton.addEventListener('click', openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);

mobileMenuOptions.forEach((opt) => {
  opt.addEventListener('click', closeMobileMenu);
});

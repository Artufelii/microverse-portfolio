const header = document.getElementById('header');
const openMenuButton = document.getElementById('open-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const main = document.getElementById('main');
// const mobileMenuOptions = document.getElementById('mobile-menu-list').querySelectorAll('li')

const openMobileMenu = () => {
  mobileMenu.classList.add('show');
  header.classList.add('blur');
  main.classList.add('blur');
};

const closeMobileMenu = () => {
  mobileMenu.classList.remove('show');
  header.classList.remove('blur');
  main.classList.remove('blur');
};

openMenuButton.addEventListener('click', openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);

// mobileMenuOptions.forEach(opt => {
// opt.addEventListener('click', closeMobileMenu)
// })

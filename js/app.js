const mobileMenu = document.querySelector('.page-header__nav-menu');
const toggleBtn = document.querySelector('.page-header__mobile-toggle');

toggleBtn.onclick = () => {
    mobileMenu.classList.toggle('page-header__nav-menu--active');
}

const subMenu = document.querySelector('.page-header__sub-menu');

subMenu.onclick = () => {
    subMenu.classList.toggle('page-header__sub-menu--active');
}
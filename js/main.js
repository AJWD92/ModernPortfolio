const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menuNav');
const menuBranding = document.querySelector('.menuBranding');
const navItems = document.querySelectorAll('.navItem');

let showMenu = false;

let toggleMenu = () => {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show')
    menuNav.classList.toggle('show')
    menuBranding.classList.toggle('show')

    navItems.forEach(item => {
        item.classList.toggle('show')
    })
}

menuBtn.addEventListener('click', toggleMenu);


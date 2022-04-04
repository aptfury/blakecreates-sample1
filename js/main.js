/***************************************

    MOBILE / SMALL WINDOW MENU

***************************************/

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItems');
const mobileNav = document.querySelector('.mobileNav');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

mobileNav.addEventListener("click", toggleMenu);
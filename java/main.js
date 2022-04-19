const navMenu = document.getElementById("navigation")
const navOpen = document.getElementById("open-nav")
const navClose = document.getElementById("nav-close")

navOpen.addEventListener("click" , () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click" , () => {
    navMenu.classList.remove("show-menu");
});
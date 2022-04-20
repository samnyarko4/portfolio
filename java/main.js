const navMenu = document.getElementById("navigation")
const navOpen = document.getElementById("open-nav")
const navClose = document.getElementById("nav-close")

navOpen.addEventListener("click" , () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click" , () => {
    navMenu.classList.remove("show-menu");
});





var content = document.getElementsByTagName("body")[0];
var darkfooter = document.getElementsByTagName("footer")[0];
var darkMode = document.getElementById("dark-change");
darkMode.addEventListener("click" , () => {
    darkMode.classList.toggle("active");
    content.classList.toggle("night");
    darkfooter.classList.toggle("nightfooter");
});


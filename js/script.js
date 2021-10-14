const hamburgerMenu = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__list");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active")
});
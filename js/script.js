const hamburgerMenu = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__list");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active")
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    width: 200,
    breakpoints: {
        425: {
            slidesPerView: 1.5,
            width: 310,
        },
        500: {
            slidesPerView: 2,
            width: 440,
            spaceBetween: 40,
        },
        620: {
            slidesPerView: 2,
            width: 540,
            spaceBetween: 40,
        },
        900: {
            slidesPerView: 2,
            width: 780,
        },
        1300: {
            slidesPerView: 3,
            width: 1200,
            spaceBetween: 60,
        }
    }
});
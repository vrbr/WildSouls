//swiper-recipes
var swiperRecipes = new Swiper(".swiper2", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});
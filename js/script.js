const hamburgerMenu = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__list");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active")
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        document.querySelector('.tab.active').classList.remove('active');
        event.currentTarget.classList.add('active');
        document.querySelector('.soul__wrapper.show').classList.remove('show');

        const selectedContent = event.currentTarget.dataset.content;
        document.querySelector(selectedContent).classList.add('show');
    })
});
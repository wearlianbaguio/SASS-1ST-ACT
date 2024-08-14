const toggleMenu = document.querySelector(".header__toggle");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
});
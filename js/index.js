// Get DOM elements only once to improve performance
const toTop = document.querySelector(".backToTop");
const hamMenu = document.querySelector("#check");
const menu1 = document.querySelector(".header__menu");
const menu2 = document.querySelector(".header__menu2");
const links = document.querySelectorAll(".menu__item");
const like = document.querySelector(".fa-solid .fa-heart");

// Function to toggle the "show" class on the "toTop" button
const toggleToTopButton = () => {
  toTop.classList.toggle("show", window.scrollY > 120);
};

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
});

window.addEventListener("scroll", toggleToTopButton);

// Function to toggle the "active" class on the menu elements
const toggleMenu = () => {
  menu1.classList.toggle("active");
  menu2.classList.toggle("active");
};

// Event listeners
window.addEventListener("scroll", toggleToTopButton);
hamMenu.addEventListener("click", toggleMenu);

// Add click event listeners to all menu items to close the menu
links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Toggle the "like" class on the "like" button
const toggleLike = () => {
  console.log("clicked");
  like.classList.toggle("liked");
};

// Initialize the "toTop" button's visibility
toggleToTopButton();
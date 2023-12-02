// Get DOM elements only once to improve performance
const toTop = document.querySelector(".backToTop");
const hamMenu = document.querySelector("#check");
const menu1 = document.querySelector(".header__menu");
const menu2 = document.querySelector(".header__menu2");
const links = document.querySelectorAll(".menu__item");
let likeBtn = document.querySelectorAll(".fa-solid.fa-heart.product_wishlistBtn");

likeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

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

// Initialize the "toTop" button's visibility
toggleToTopButton();
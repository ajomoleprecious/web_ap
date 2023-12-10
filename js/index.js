// Get DOM elements only once to improve performance
const toTop = document.querySelector(".backToTop");
const hamMenu = document.querySelector("#check");
const menu1 = document.querySelector(".header__menu");
const menu2 = document.querySelector(".header__menu2");
const links = document.querySelectorAll(".menu__item");
let likeBtn = document.querySelectorAll(".fa-solid.fa-heart");
const lightBtn = document.querySelector(".header__menu2__light");
const header = document.querySelector("header");

likeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

lightBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    darkMode();
  } else {
    lightMode();
  }
});

// Function to change the website to light mode

function lightMode() {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
  lightBtn.innerHTML = `<i class="fas fa-moon"></i>`; 
}

// Function to change the website to dark mode

function darkMode() {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  localStorage.setItem("theme", "dark");
  lightBtn.innerHTML = `<i class="fas fa-sun"></i>`;  
}

// Function to check the current theme

function checkTheme() {
  if (localStorage.getItem("theme") == "light") {
    lightMode();
  } else {
    darkMode();
  }
}

// Function to toggle the "show" class on the "toTop" button
const toggleToTopButton = () => {
  toTop.classList.toggle("show", window.scrollY > 120);
  header.style.boxShadow = window.scrollY > 120 ? "0 0 30px 0 var(--primary-color)" : "none";
};

toTop.addEventListener("click", () => {
  document.documentElement.style.scrollBehavior = "smooth";
  window.scrollTo({
    top: 0
  });
});

window.addEventListener("scroll", toggleToTopButton);

// Function to disable scrolling
function disableScroll() {
  document.body.style.overflow = "hidden";
  document.querySelector("body").style.height = "100%";
}

// Function to enable scrolling
function enableScroll() {
  document.body.style.overflow = null;
  document.querySelector("body").style.height = null;
}

// Function to toggle the "active" class on the menu elements
function toggleMenu()  {
  if (window.innerWidth <= 1200) {
    menu1.classList.toggle("active");
    menu2.classList.toggle("active");
    if (menu1.classList.contains("active")) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
};


// Enable scrolling when the menu is closed
document.querySelector("main").addEventListener("click", () => {
  if (menu1.classList.contains("active") && menu2.classList.contains("active")) {
    toggleMenu();
  }
});
document.querySelector("footer").addEventListener("click", () => {
  if (menu1.classList.contains("active") && menu2.classList.contains("active")) {
    toggleMenu();
  }
});

// Event listeners
window.addEventListener("scroll", toggleToTopButton);
hamMenu.addEventListener("click", toggleMenu);

// Add click event listeners to all menu items to close the menu
links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Initialize the "toTop" button's visibility
toggleToTopButton();
checkTheme();
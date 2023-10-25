const filterMenu = document.querySelector("#filterbox");
const filters = document.querySelector(".shop__aside");
const filterClose = document.querySelector(".filterClose");

const toggleFilterMenu = () => {
  filters.classList.toggle("active");
};

filterMenu.addEventListener("click", toggleFilterMenu);
filterClose.addEventListener("click", () => {
  filters.classList.remove("active");
});

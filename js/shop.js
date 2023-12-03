const filterMenu = document.querySelector("#filterbox");
const filters = document.querySelector(".shop__aside");
const filterClose = document.querySelector(".filterClose");
const shoppingBtn = document.querySelector(".header__menu2__shopping");
const shoppingCart = document.querySelector(".cart-summary");
let cartcloseBtn = document.querySelector(".summaryclose");
let addToCartBtn = document.querySelectorAll(".product__shopping");
let subtotaal = document.querySelector(".subtotaal");
let btw = document.querySelector(".btw");
let totaal = document.querySelector(".totaal");
let cartItems = [];

addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    shoppingCart.classList.add("show");
  });
});

cartcloseBtn.addEventListener("click", () => {
  shoppingCart.classList.toggle("show");
});

shoppingBtn.addEventListener("click", () => {
  shoppingCart.classList.toggle("show");
  toggleMenu();
});

// Function to toggle the "active" class on the menu elements
function toggleMenu() {
  menu1.classList.toggle("active");
  menu2.classList.toggle("active");
  if (menu1.classList.contains("active")) {
    disableScroll();
  } else {
    enableScroll();
  }
}

const toggleFilterMenu = () => {
  filters.classList.toggle("active");
};

filterMenu.addEventListener("click", toggleFilterMenu);
filterClose.addEventListener("click", () => {
  filters.classList.remove("active");
});

function addToCart(productName, productPrice) {
  let existingCartItem = cartItems.find((item) => item.name === productName);
  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cartItems.push({
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  displayCartItems();
}

function displayCartItems() {
  let cartList = document.querySelector(".cartList");
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    cartList.innerHTML += `
            <section>
              <p class="movietitle">${item.name}</p>
              <div class="amount">
                <p>&times;</p>
                <p class="amountNumber">${item.quantity}</p>
              </div>
                <p class="price">€ ${item.price}</p>
                <i class="fa-solid fa-xmark deleteproduct" onclick="removeProduct('${item.name}')"></i>
            </section>
            `;

    subtotaal.innerHTML = `€ ${calculateSubTotal()}`;
    btw.innerHTML = `€ ${calculateBtw()}`;
    totaal.innerHTML = `€ ${calculateTotal()}`;
  });

  if (cartItems.length === 0) {
    shoppingCart.classList.remove("show");
    subtotaal.innerHTML = `€ 0.00`;
    btw.innerHTML = `€ 0.00`;
    totaal.innerHTML = `€ 0.00`;
  }
}

function calculateSubTotal() {
  let subTotal = 0;
  cartItems.forEach((item) => {
    subTotal += item.price * item.quantity;
  });
  return subTotal.toFixed(2);
}

function calculateBtw() {
  let btw = calculateSubTotal() * 0.21;
  return btw.toFixed(2);
}

function calculateTotal() {
  let total = calculateSubTotal() * 1.21;
  return total.toFixed(2);
}

function removeProduct(productName) {
  let existingCartItem = cartItems.find((item) => item.name === productName);
  if (existingCartItem.quantity === 1) {
    cartItems = cartItems.filter((item) => item.name !== productName);
  } else {
    existingCartItem.quantity--;
  }
  displayCartItems();
}

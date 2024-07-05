const cart_icon = document.querySelector(".fa-cart-shopping");
const overlay = document.querySelector(".overlay");
const cart = document.querySelector(".cart");
const fa_xmark = document.querySelector(".fa-xmark");
cart_icon.onclick = () => {
   overlay.classList.remove("display");
   cart.classList.remove("display");
};

fa_xmark.onclick = () => {
   overlay.classList.add("display");
   cart.classList.add("display");
};
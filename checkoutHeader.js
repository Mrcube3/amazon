import {cart} from '../../data/cart.js';

export function renderCheckoutHeader() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-checkout-header-middle-section').innerHTML = `Checkout (<a class="return-to-home-link" href="amazon.html">${cartQuantity} items</a>)`;
}
          //   ===== this is a moudle (we are now loading the cart.js without using a tag to avoid naming coflit ==== )
    //.   advantages 
    // no need for order of script tages and organize code espically in bigger projects 
    // avoide namining conflit 
    // we can import and export many things with a comma(i mean duhh )
    // amd we can import like what we have on the amazon.js file or this (
    // import * cartMoudle from '..data/cart.js';
    // cartMoudle.cart
    // cartmoudle.addToCart ('id');)

    
  export let cart;

  export function loadFromStorage(){
    try {
    cart = JSON.parse(localStorage.getItem('cart'));
  } catch (error) {
    console.error('Error loading cart:', error);
    cart = null;
  }
  
  if (!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, { 
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
    console.log('Using default cart:', cart);
  }
  };
  
  // By removing this call, the cart will no longer
  // load automatically. We will call it from our tests.
  // loadFromStorage();
  
  function saveToStorage(){
    localStorage.setItem ('cart', JSON.stringify (cart));
  }
  
  export function addToCart(productId){
        let matchingItem;

      cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem
      }
      });

      if (matchingItem){
        matchingItem.quantity += 1;
      } else {
                cart.push({
        productId: productId,
        quantity :1,
        deliveryOptionId: '1'
      });
      }

      saveToStorage();

     };

 export function removeFromCart (productId){
     const newCart = [];

     cart.forEach((cartItem) => {
      if (cartItem.productId !== productId){
        newCart.push(cartItem);
      }
     });
      cart = newCart


      saveToStorage();
 };


  export function updateDeliveryOption(productId, deliveryOptionId){
    
        let matchingItem;

      cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem
      }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;

      saveToStorage();
 }
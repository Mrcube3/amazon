          //   ===== this is a moudle (we are now loading the cart.js without using a tag to avoid naming coflit ==== )
    //.   advantages 
    // no need for order of script tages and organize code espically in bigger projects 
    // avoide namining conflit 
    // we can import and export many things with a comma(i mean duhh )
    // amd we can import like what we have on the amazon.js file or this (
    // import * cartMoudle from '..data/cart.js';
    // cartMoudle.cart
    // cartmoudle.addToCart ('id');)

     function Cart(localStorageKey){
       


          const cart = {
             cartItems : undefined,

        loadFromStorage : function(){
    try {
    this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
    ('Cart loaded from storage:', cart);
  } catch (error) {
    console.error('Error loading cart:', error);
    this.cartItems = null;
  }
  
  if (!this.cartItems) {
    this.cartItems = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, { 
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
    ('Using default cart:', cart);
  }
  },

     saveToStorage(){
    localStorage.setItem (localStorageKey, JSON.stringify (this.cartItems));
  },


      addToCart(productId){
        let matchingItem;

      this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem
      }
      });

      if (matchingItem){
        matchingItem.quantity += 1;
      } else {
       this.cartItems.push({
        productId: productId,
        quantity :1,
        deliveryOptionId: '1'
      });
      }

      this.saveToStorage();

     
  
  },
   

      removeFromCart (productId){
     const newCart = [];

     this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId){
        newCart.push(cartItem);
      }
     });
      this.cartItems = newCart


      this.saveToStorage();
 },
      updateDeliveryOption(productId, deliveryOptionId){
    
        let matchingItem;

      this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem
      }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
 }
     };

     return cart;
   };

   const cart = Cart('cart-oop');
   const businessCart = Cart('cart-business')


     cart.loadFromStorage();
 
  // By removing this call, the cart will no longer
  // load automatically. We will call it from our tests.
  // loadFromStorage();
  
  console.log (cart);
  console.log(businessCart);
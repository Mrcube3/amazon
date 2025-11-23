import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts , loadProductsFetch} from "../data/products.js";
import { loadFromStorage } from '../data/cart.js';
//import { loadCart } from '../data/cart.js';

// import '../data/cart-class.js'
// import '../data/backend-practice.js'

// async makes a function return a promise 
function loadPage (){

}
/*

// resolve helps us to wait before going to the next step wwithout causing issues
Promise.all([
     loadProductsFetch(),
    new Promise((resolve)=>{
        loadProducts(()=>{
            resolve('value1');
        });
    }),
    new Promise((resolve)=>{
       loadCart(() =>{
        resolve();
       });
    }),


]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();

})


new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    return new Promise((resolve)=>{
       loadCart(() =>{
        resolve();
       })
    });
}).then (()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/


// this is a call back more problem 

loadFromStorage();

loadProducts( ()=>{ 
renderOrderSummary();
renderPaymentSummary()

});


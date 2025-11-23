import { renderOrderSummary } from '../../scripts/checkout/orderSummary.js';
import { cart, loadFromStorage } from "../../data/cart.js";
import { loadProducts, loadProductsFetch } from "../../data/products.js";


describe('test suite: renderOrderSummary', () => { 
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

    beforeAll((done)=>{
        loadProductsFetch(()=>{
            done();
        });
    });

    // Use beforeEach for setup to keep tests clean and isolated.
    // aftereach can be used for cleanup if necessary.
    beforeEach(() => {
        // Set up the DOM elements our component needs to render into.
        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
            <div class="js-payment-summary"></div>
        `;

        // Mock the cart data in localStorage
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            }, { 
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }]);
        });
        loadFromStorage();

        // Run the function to render the component.
        renderOrderSummary();
    });

    // Use afterEach to clean up the DOM after each test.
    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    });

    
    it('displays the cart', () => {
        // Assertion 1: Check that the correct number of items are rendered.
        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);

        // Assertion 2: Check the quantity for a specific product.
        // Note: Your HTML needs a unique class/ID for this to work.
        // I've used the one from your orderSummary.js file.
        expect(
            document.querySelector(`.js-cart-item-container-${productId1} .quantity-label`).innerText
        ).toEqual('2');
        expect(
            document.querySelector(`.js-cart-item-container-${productId2} .quantity-label`).innerText
        ).toEqual('1');
    });


    it('removes a product', () => {
        // Simulate a click on the delete link for the first product.
        document.querySelector(`.js-delete-link[data-product-id="${productId1}"]`).click();

        // Check that the item is removed from the page and the cart data.
        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId2);
    });
});
import { addToCart, cart, loadFromStorage } from "../../../data/cart.js";

describe('test suite: addToCart', ()=> {
    // Use beforeEach to run setup code before each test.
    // This isolates our tests from each other.
    beforeEach(() => {
        // Mock localStorage.setItem so we can check if it's called.
        spyOn(localStorage, 'setItem');
    });

    it ('adds an existing product to the cart',()=> {
        // 1. Setup: Mock localStorage to return a cart with one item.
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        // Now, load the cart from our mock storage.
        loadFromStorage();

        // 2. Run the code we want to test.
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        // 3. Assertions: Check if the code worked as expected.
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });

    it('adds a new product to the cart', ()=> {
        // 1. Setup: Mock localStorage to return an empty cart.
        spyOn(localStorage, 'getItem').and.callFake(()=> {
            return JSON.stringify([]);
        });
        // Load the (now empty) cart from our mock storage.
        loadFromStorage();

        // 2. Run the code.
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        // 3. Assertions.
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});


//  No More Auto-Loading: cart.js no longer runs loadFromStorage() on its own. This is the most important change.(rember that )
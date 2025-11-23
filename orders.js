export const orders = JSON.parse(localStorage.getItem('order')) || [];


export function addOrder(order){
    orders.unshift(order);
     savingToStorage();
}

function savingToStorage(){
    localStorage.setItem('order', JSON.stringify(orders));
}
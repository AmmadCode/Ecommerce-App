import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    
    let arrLocalStorage = getCartProductFromLS();
    let initialValue = 0;
    
    let total = arrLocalStorage.reduce((acc,curr) => {
        let productPrice = parseInt(curr.price) || 0;
        return acc + productPrice;
    },initialValue)
    
    productSubTotal.textContent = `£${total.toFixed(2)}`;
    productFinalTotal.textContent = `£${total + 50}`;
}


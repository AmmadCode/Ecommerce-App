import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromLS = (id,price) => {
    let cartData = getCartProductFromLS();
    
    let existingProduct = cartData.find((curr) => curr.id === id);
    let quantity = 1;
    
    if(existingProduct) {
        quantity = existingProduct.quantity;
        price = Number(existingProduct.price.toFixed(2));
    }
    
    return {quantity,price};
}




import { getCartProductFromLS } from "./getCartProductFromLS";
import {  updateCartProductTotal } from "./updateCartProductTotal";
export const incrementDecrement = (event,id,stock,price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
     // console.log(currentCardElement);
    
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    // console.log(productQuantity.textContent);
    
    const productPrice = currentCardElement.querySelector(".productPrice");
    
    let quantity = 1;
    let localStoragePrice = 0;
    
    let arrLocalStorage = getCartProductFromLS();
  
    
    let existingData = arrLocalStorage.find((curr) => curr.id === id);
    
    if(existingData) {
        quantity = existingData.quantity;
        localStoragePrice = existingData.price;
    } else {
        localStoragePrice = price;
        price = price;
    }
    
    if (event.target.className === "cartIncrement") {
       if (quantity < stock) {
      quantity += 1;
        }
        else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
      }

      if (event.target.className === "cartDecrement") {
         if (quantity > 1) {
              quantity -= 1;
           }
        }
        
       localStoragePrice = price * quantity;
       localStoragePrice = Number(localStoragePrice.toFixed(2));
    
       let updatedCart = { id, quantity, price:localStoragePrice};

    updatedCart = arrLocalStorage.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;
    
    
    
    
    updateCartProductTotal()
}


updateCartProductTotal()

import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";
import {  showToast } from "./showToast";

getCartProductFromLS();
export const addToCart = (event,id,stock) => {
  
  let arrLocalStorage = getCartProductFromLS();
  
  
  const currentProductElement = document.querySelector(`#card${id}`);
     //console.log(currentProductElement);
  let quantity = currentProductElement.querySelector(".productQuantity").innerText;
  let price = currentProductElement.querySelector(".productPrice").innerText;
   
  price = price.replace("£", "");

  let existingProd = arrLocalStorage.find(
    (curProd) => curProd.id === id
  );
  
  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorage.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    //show toast when product added to the cart
    
    showToast("add",id)
  }

  console.log(existingProd);
  if(existingProd) {
    //alert("hello")
    return false;
  }
  
  
  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorage.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorage));

  updateCartValue(arrLocalStorage);
  
  
  showToast("add",id)
}


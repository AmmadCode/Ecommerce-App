import { getCartProductFromLS } from "./getCartProductFromLS";
import {  updateCartProductTotal } from "./updateCartProductTotal";
import {  showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  let updatedcartProducts = cartProducts.filter((curr) => curr.id !== id);
  localStorage.setItem("cartProductLS", JSON.stringify(updatedcartProducts));
  let remove = document.getElementById(`card${id}`);
  if(remove) {
    remove.remove();
    showToast("delete",id);
  }
  
  updateCartProductTotal();
  
  updateCartValue(updatedcartProducts);
  
  
}
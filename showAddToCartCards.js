import  products  from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { removeProdFromCart }  from "./removeProdFromCart";
import { incrementDecrement }  from "./incrementDecrement";   
import {  updateCartProductTotal } from "./updateCartProductTotal";
let cartProducts = getCartProductFromLS();
let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

//console.log(filterProducts);


// -----------------------------------------------------
// to update the addToCart page
// --------------------------------------------------------
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category,id, image ,name,stock,price } = curProd;
    
    let productClone = document.importNode(templateContainer.content,true);
    
    const lsActualData = fetchQuantityFromLS(id,price);
    
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productPrice").textContent = lsActualData.price;
    productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
    
    // increment and decrement
    productClone.querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock,price);
      });
    
    
    productClone.querySelector(".remove-to-cart-button").addEventListener("click",
    () => removeProdFromCart(id));
    
    
    
    cartElement.appendChild(productClone);
        
    
    
  });
};

// -----------------------------------------------------
// Showing the cartProducts
// --------------------------------------------------------
showCartProduct();



updateCartProductTotal();


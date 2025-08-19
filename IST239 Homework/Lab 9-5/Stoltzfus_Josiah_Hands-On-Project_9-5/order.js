"use strict";
/*
Josiah Stoltzfus, July 18, 2025, IST239-W01, Hands-On Project 9-5

In Hands-On Project 9-5, I learned how to find and correct issues with sessionStorage. 
I fixed problems with sessionStorage key names and method calls, added spacing in the item text string, and corrected how items were added to the cart.
*/

// Page Objects
let submitButton = document.getElementById("submitButton");
let product = document.getElementById("product");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let size = document.getElementById("size");
let color = document.getElementById("color");

submitButton.onclick = function() {
   let itemTotal;
   // Increase the total items in the shopping cart by 1
   // FIXED: Changed itemsInCart variable to a string
   if (sessionStorage.getItem("itemsInCart")) {
      // FIXED: Changed itemsInCart variable to a string literal
      itemTotal = parseInt(sessionStorage.getItem("itemsInCart")) + 1;
   } else {
      itemTotal = 1;
   }
   
   // Store the number of items in the shopping cart
   // FIXED: Changed itemsInCart variable to a string
   sessionStorage.setItem("itemsInCart", itemTotal);
   
   // Create a text string describing the product added to the cart
   // FIXED: Added spacing before and after for each of the strings containing &
   let itemText = product.value + " & ";
   itemText += price.value + " & ";
   itemText += quantity.value + " & ";
   itemText += size.value + " & ";
   itemText += color.value;

   // Create a new shopping cart storage item with the key name "cartItem" plus the item number
   // FIXED: Changed set() method to setItem() 
   sessionStorage.setItem("cartItem" + itemTotal, itemText);
   
}
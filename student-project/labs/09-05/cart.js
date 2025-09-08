"use strict";
/*
Josiah Stoltzfus, July 18, 2025, IST239-W01, Hands-On Project 9-5

In Hands-On Project 9-5, I learned how to spot and fix errors when accessing and parsing sessionStorage key value pairs. 
I fixed problems with sessionStorage key names and method calls. I also fixed how cart items were being parsed.
*/

// Page Objects
let cartContainer = document.getElementById("cartContainer");

window.addEventListener("load", displayCart);

// Function to construct the table containing items placed in the shopping cart
function displayCart() {
   
   // Check that there are items in the shopping cart
   // FIXED: Changed the itemsInCart variable to a string literal
   // FIXED: Changed get() method to getItem()
   if (sessionStorage.getItem("itemsInCart")) {
      // FIXED: Changed the itemsInCart variable into a string literal
      // FIXED: Changed the get() method to getItem()
      let itemTotal = sessionStorage.getItem("itemsInCart");
      
      // Create the code for the table and the table header
      let cartTable = document.createElement("table");
      cartTable.id = "cartTable";
      let tableHeader = `<tr><th>Product</th><th>Description</th><th>Qty</th><th>Price</th>`;
      cartTable.innerHTML = tableHeader;
      
      // For each item in the shopping cart, write a table row
      for (let i = 1; i <= itemTotal; i++) {
         
         // Retrieve information about a product added to the cart
         // FIXED: Changed the ; to & because the items were stored using the & separator. Changed session() method to sessionStorage()
         let productArr = sessionStorage.getItem("cartItem" + i).split(" & ");
         let newRow = document.createElement("tr");
         
         // Display the name of the product
         let productCell = document.createElement("td");
         productCell.textContent = productArr[0];
         newRow.appendChild(productCell);
         
         // Display a description of the product (size and color)
         let descriptionCell = document.createElement("td");
         descriptionCell.textContent = productArr[3] + ", " + productArr[4];
         newRow.appendChild(descriptionCell);
         
         // Display the quantity ordered
         let qtyCell = document.createElement("td");
         qtyCell.textContent = productArr[2];
         newRow.appendChild(qtyCell); 
         
         // Display the price of the item
         let priceCell = document.createElement("td");
         priceCell.textContent = productArr[1];
         newRow.appendChild(priceCell); 
         
         cartTable.appendChild(newRow);
      }
      
      cartContainer.appendChild(cartTable);
   }
}
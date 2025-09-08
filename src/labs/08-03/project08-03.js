"use strict";
/*
Josiah Stoltzfus, July 12, 2025, IST239-W01, Hands-On Project 8-3

In Hands-On Project 8-3, I wrote the cart object, created the Pizza and Topping classes, and added methods to handle building a pizza, adding it to a cart, and summarizing it. I also handled the visual pizza preview and updating the cart.
*/

/*---------------- Object Code ----------------------*/


let cart = {
   items : [],
   addItem: function(foodItem) {
      this.items.push(foodItem);
   }
}

// Class for a Pizza
class Pizza {
   // Constructor method for creating Pizza object
   constructor() {
      this.size = null; // store the selected pizza size
      this.crust = null; // store the selected pizza crust
      this.toppings = []; // store an array of pizza toppings
   }
}

// Class for a Topping
class Topping {
   // Constructor method for creating Topping object
   constructor() {
      this.name = null; // store the name of a topping
      this.side = null; // this is for the side of the pizza that a topping is on, like left, right, or full
   }
}

// This method adds the pizza to the cart object items array.
Pizza.prototype.addToCart = function(cart) {
   cart.items.push(this); // add 'this' Pizza object to the cart items array
}

// This method will add a topping to the list of toppings in the Pizza object.
Pizza.prototype.addTopping = function(myTopping) {
    this.toppings.push(myTopping); // add the Topping object to 'this' pizza's toppings array.
}

// This method summarizes the Pizza as a string and returns it.
Pizza.prototype.summarize = function() {
   let summary = "Pizza"; // Start the description with the string "Pizza"
   summary += ": " + this.size + " " + this.crust; // add size and crust to the summary string

   // This for loop with loop through the list of toppings and add them to the summary string
   for (let i = 0; i < this.toppings.length; i++) {
      let name = this.toppings[i].name; // get the name of the topping from the topping object
      let side = this.toppings[i].side; // get the side that the topping is placed on from the topping object 

      summary += " " + name + "(" + side + ")"; // format the string to display a description of the summary
   }

   return summary; // return the pizza summary
}


/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}


// Function to build the pizza
// This function will build a new pizza based on the selected options.
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked");

   let myPizza = new Pizza(); // create a new pizza object
   myPizza.size = pizzaSizeBox.value; // set the size of the pizza object to what the user selected
   myPizza.crust = pizzaCrustBox.value; // set the crust of the pizza object to what the user selected

   // This for loop will loop through the toppings and add them to the pizza
   for (let i = 0; i < checkedToppings.length; i++) {
      let myTopping = new Topping(); // create a new toppings object
      myTopping.name = checkedToppings[i].name; // set the name of the topping from what the user selected
      myTopping.side = checkedToppings[i].value; // set the side of the pizza that the user selected
      myPizza.addTopping(myTopping); // add the topping to the pizza using the addTopping method
   }

   return myPizza; // return the completed pizza

}    

// Function to add the built pizza to the shopping cart
// This function will update the cart with the new pizza and display it
function updateCart() {

   let myPizza = buildPizza(); // call the buildPizza() method to build the pizza based on the options selected

   cart.addItem(myPizza); // add the pizza to the cart using the addItem method

   console.log(cart); // log the cart to the console for debugging purposes

   let paragraph = document.createElement("p"); // make a new paragraph element to display the pizza summary
   paragraph.textContent = myPizza.summarize() // set the text content of the paragraph tag to the pizza summary
   cartBox.appendChild(paragraph); // add the paragraph element to the cart display box

   clearPizzaImage(); // clear the image
   clearToppings(); // reset the toppings

}  

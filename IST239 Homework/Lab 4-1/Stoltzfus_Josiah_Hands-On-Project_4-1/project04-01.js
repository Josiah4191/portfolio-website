/*
Josiah Stoltzfus, June 14, 2025, IST239-W01, Hands-On Project 4-1

In Hands-On Project 4-1, I corrected logical errors in the cost calculations and added error handling to check that users enter valid input.
*/

// Added "use strict" so that the program adheres to a strict interpretation of JavaScript syntax
"use strict";

// Global Constants
const COST_PER_LB = 0.50; // Fixed logic error 1: Changed 50 to 0.5
const COST_PER_MILE = 0.75; // Fixed logic error 2: Changed 75 to 0.75
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box
   
// This try/catch block checks whether the entered weight is greater than 0
// If it is not, it will throw an error and display the error message in the HTML element
   try {

         if (!(wgtBox.value > 0)) { // Check if the value of wgtBox is not greater than 0
            throw new Error("!!Enter a positive weight"); // If it is not greater than 0, then throw an error
         }

      // This statement will execute if an error is not thrown
      totalCost += wgtBox.value * COST_PER_LB;    

   } catch (error) {
      msgBox.innerHTML = error.message; // Display the error message inside the msgBox element
   }


// This try/catch block checks whether the entered distance is greater than 0
// If it is not, it will throw an error and display the error message in the HTML element
   try {

      if (!(distBox.value > 0)) { // Check if the value of distBox is not greater than 0
         throw new Error("!!Enter a positive mileage"); // If it is not greater than 0, then throw an error
      }

      // This statement will execute if an error is not thrown
      totalCost += distBox.value * COST_PER_MILE; 

   } catch (error) {
      msgBox.innerHTML = error.message; // Display the error message inside the msgBox element
   }
  
   
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }
   
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
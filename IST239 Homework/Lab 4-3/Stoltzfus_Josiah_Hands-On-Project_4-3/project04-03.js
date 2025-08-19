/*
Josiah Stoltzfus, June 14, 2025, IST239-W01, Hands-On Project 4-3

In Hands-On Project 4-3, I fixed some syntax errors with variables, added error handling to show a message if the character count goes over the limit, 
and cleaned up a mistake where the wrong variable name was used. I learned how to handle user input more safely and catch errors using try/catch blocks.
*/

// Added "use strict" so that the program adheres to a strict interpretation of JavaScript syntax
"use strict";

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
let wordCountBox = document.getElementById("countValue"); // Fixed error: This statement was missing the 'let' keyword when declaring the variable
let warningBox = document.getElementById("warningBox"); // Fixed error: This statement was missing the 'let' keyword when declaring the variable


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount); // Fixed error: Added quotations to keyup. keyup needs to be a string value when passed to the addEventListener method

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value; // Fixed error: This statement was missing the 'let' keyword when declaring the variable
   let charCount = countCharacters(commentText); // Fixed error: 'commentsText' is not the correct variable name. Changed to 'commentText'
   

   // Try to check if the character count goes over the limit
   try {

      if (charCount > MAX_REVIEW) { // If it does go over the limit, throw an error
         throw new Error("You have exceeded the character count limit");
      }

   } catch (error) {
      warningBox.innerHTML = error.message; // Set the warningBox's innerHTML to show the error message
   } finally {
      wordCountBox.innerHTML = charCount; // Always update the wordCountBox's innerHTML to show the total character count
   }



}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 
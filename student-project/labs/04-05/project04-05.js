/*
Josiah Stoltzfus, June 14, 2025, IST239-W01, Hands-On Project 4-5

In Hands-On Project 4-5, I fixed syntax and logic errors and used console.log() to test and track variable values. This helped me understand how the code was working and made it easier to find issues.
I also used the browser’s developer tools to view error messages and figure out what was going wrong.
*/

// Added "use strict" so that the program adheres to a strict interpretation of JavaScript syntax
"use strict";

// Declare the PI variable and set it equal to Math.PI
const PI = Math.PI;
//console.log(PI); - Test to see the output of PI variable in console

// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   // 
   return degrees*PI/180; // Fixed errors: The variable PI was not declared. Added the declaration above to remove the error. Also, the calculation was incorrect because it was dividing by 80. Changed 80 to 180.
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians*180/PI; // Fixed error: The variable PI was not declared. Added the declaration above to remove the error
}

// Event handler that converts radians to degrees when the input box is changed
document.getElementById("rValue").onchange = function() { // Fixed error: Added the missing closing parentheses after function keyword
   let radians = document.getElementById("rValue").value;
   console.log("Radians = " + radians);
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians)); // Fixed error: 'radian' is not the correct name of the variable. Changed to 'radians'
}

// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   console.log("Degrees = " + degrees);
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees)); // Fixed error: Added the missing closing parentheses at the end of the statement
}





/* ================================================================= */
 // Function to display a numeric value in the format ##.### 
 function formatValue3(value) {
    return value.toFixed(3);
 }
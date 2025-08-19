"use strict";
/*
Josiah Stoltzfus, June 28, 2025, IST239-W01, Hands-On Project 6-1

In Hands-On Project 6-1, I added simple form validation with JavaScript to check that the password meets the pattern and matches the confirmation. I learned how to use setCustomValidity() to show custom error messages.
*/


// Get references to the form elements
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Add click event listener to the submit button
submitButton.addEventListener("click", function() {
      // Check if the password does not meet the pattern defined in HTML document for the element with 'pwd' id
      if (pwd.validity.patternMismatch) {
            // Show message if the password is invalid
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
      } else if (pwd.value !== pwd2.value) {
            // Show message if the passwords do not match
            pwd.setCustomValidity("Your passwords must match.");
      } else {
            // Show an empty string if the password passes validation
            pwd.setCustomValidity("");
      }
});

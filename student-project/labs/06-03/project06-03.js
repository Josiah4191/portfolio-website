"use strict";
/*
Josiah Stoltzfus, June 28, 2025, IST239-W01, Hands-On Project 6-3

In Hands-On Project 6-3, I copied shipping info to billing and showed a custom error message if fields are left blank. 
I learned how to handle checkbox events and use the invalid event for form validation.
*/

// Get the "useShip" checkbox element
let useShip = document.getElementById("useShip");

// Add event listener to run copyShippingToBilling function when the checkbox is checked
useShip.addEventListener("click", copyShippingToBilling);

// This function will copy the values in the shipping input elements over to the billing input elements
function copyShippingToBilling() {
    // Check if the useShip checkbox is checked
    if (useShip.checked) {

        // Create an array for each of the input prefixes
        let inputs = ["firstname", "lastname", "address1", "city", "country", "code"];

        // Loop through the length of the inputs array
         for (let i = 0; i < inputs.length; i++) {
            // Get the value from the shipping input at the current index
            let shipValue = document.getElementById(inputs[i] + "Ship").value;
            // Set the value of the matching billing input to the shipping input value
            document.getElementById(inputs[i] + "Bill").value = shipValue;
         }
    }
}

// Get all of the text inputs with specified CSS selector
let formElements = document.querySelectorAll("input[type='text']");
// Get the length of the formElements
let fieldCount = formElements.length;
// Get the error message box
let errorBox = document.getElementById("errorBox");

// Loop through the number of form elements
for (let i = 0; i < fieldCount; i++) {
    // Add event listener to the invalid event and run the showValidationError function
    formElements[i].addEventListener("invalid", showValidationError);
}

// This function will prevent the default error message from displaying and sets a custom message for the errorBox text content.
function showValidationError(evt) {
    evt.preventDefault();
    errorBox.textContent = "Complete all highlighted fields.";
}
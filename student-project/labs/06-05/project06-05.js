"use strict";
/*
Josiah Stoltzfus, June 28, 2025, IST239-W01, Hands-On Project 6-5

In Hands-On Project 6-5, I fixed errors by using proper event listeners and correcting element properties. I learned how to properly reference form fields and handle user input.
*/

window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   // Verify that the user has selected a session to attend
   // FIXED: The code was using .click to improperly assign the sessionTest function to the click event. Used the addEventListener method to add the function to click event.
   document.getElementById("regSubmit").addEventListener("click", sessionTest); 
   // Recalculate the shopping cart when any field loses the focus
   // FIXED: The code for each box was using .blur and .change to improperly assign the calcCart function to the blur and change events. Used the addEventListener method to add the function to blur and change event.
   document.getElementById("fnBox").addEventListener("blur", calcCart);
   document.getElementById("lnBox").addEventListener("blur", calcCart);
   document.getElementById("groupBox").addEventListener("blur", calcCart);
   document.getElementById("mailBox").addEventListener("blur", calcCart);
   document.getElementById("phoneBox").addEventListener("blur", calcCart);
   document.getElementById("sessionBox").addEventListener("change", calcCart);
   document.getElementById("banquetBox").addEventListener("blur", calcCart);
   document.getElementById("mediaCB").addEventListener("click", calcCart);
});


// Function to verify that a session was selected by the user
function sessionTest() {
   var confSession = document.getElementById("sessionBox");
   if (confSession.selectedIndex === -1) {
      // FIXED: changed setValidity to setCustomValidity
      confSession.setCustomValidity("Select a Session Package");
   } else {
      // FIXED: changed setValidity to setCustomValidity
      confSession.setCustomValidity("");
   }
}

// Function to calculate the shopping cart total
function calcCart() {
   
   // Calculate the banquet cost for all guests 
   let guestCost = document.forms.register.elements.banquetGuests.value*55;
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value;
   
   // Determine the cost of the selected session
   let sessionCost = 0;       // Initial cost of the session
   let sessionChoice = "";    // Initial chosen session

   // Index of the chosen session
   // FIXED: Changed .index to .selectedIndex
   let selectedSession = document.getElementById("sessionBox").selectedIndex;
   
   // Retrieve the name and cost of the selected session  
   if (selectedSession !== -1) {
      // FIXED: Added .options after .sessionBox, because .sessionBox doesn't return a collection. The .options returns a collection of option elements inside the sessionBox element.
      sessionChoice = document.forms.register.elements.sessionBox.options[selectedSession].text;
      sessionCost = document.forms.register.elements.sessionBox.options[selectedSession].value;
   }
   
   // Determine the cost of the media pack
   let mediaCost = 0;      // Initial media cost
   let mediaChoice = "";   // Initial media choice
   
   // If the user selects the media pack, update the choice and cost
   // FIXED: Changed .check to .checked
   if (document.forms.register.elements.mediaCB.checked) {
      mediaChoice = "yes";
      mediaCost = 115;
   }
   
   // Calculate total cost of the conference
   // Multiply field values by 1 to convert them from text strings to numeric values
   let totalCost = guestCost*1 + sessionCost*1 + mediaCost*1;
   
   // Display the field values and calculated values in the Shopping Cart table
   document.getElementById("regName").textContent = document.forms.register.elements.firstName.value + " " + document.forms.register.elements.lastName.value;
   document.getElementById("regGroup").textContent = document.forms.register.elements.group.value;
   document.getElementById("regEmail").textContent = document.forms.register.elements.email.value;
   document.getElementById("regPhone").textContent = document.forms.register.elements.phoneNumber.value;
   document.getElementById("regSession").textContent = sessionChoice;
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value; 
   document.getElementById("regPack").textContent = mediaChoice;
   // FIXED: Added braces around the style argument inside the toLocaleString method
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
}

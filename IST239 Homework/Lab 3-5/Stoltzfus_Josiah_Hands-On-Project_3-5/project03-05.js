/*
Josiah Stoltzfus, June 14, 2025, IST239-W01, Hands-On Project 3-5

In Hands-On Project 3-5, I learned how to identify and fix syntax errors in arrays and switch statements, logical errors in calculations, and problems related to calling and defining functions.
*/

// Array of phone models sold by the company
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"]; // Error 1: Changed the parentheses () to brackets []

// Units sold in the previous quarter
let sales = [10281, 12255, 25718, 21403, 16142]; // Error 2: Removed the parentheses and added opening bracket 

// Variable to calculate total sales
let totalSales = 0;

// Use the forEach() method to sum the sales for each phone model and add it to the totalSales variable
sales.forEach(addToTotal); // Error 3: Changed addtoTotal to addToTotal. 'addtoTotal' was not the correct function name

// For loop to generate bar chart of phone sales
for (let i = 0; i < phones.length; i++) { // Error 4: Changed the initial counter variable's value to 0, and changed '<=' to '<' in the condition. Arrays are 0 indexed, so it should start with 0
   
   let barChart = "";   // Variable to store HTML code for table cells used to create bar chart
   
   // Calculate the percent of total sales for a particular phone model
   // Error 5: The equation was not correct. I added [i] to sales so that it retrieves the value from the sales array at the current index
   // I also added parentheses around the multiplication to avoid confusion with the order of operations
   let barPercent = (100*sales[i])/totalSales;
   
   
   let cellTag;   // Variable that will define the class of td elements used in creating the bar chart cells.
   
   // Determine the table cell based on the value of the phone model
   // Error 6: Each case was missing a colon in the switch statement. There must be a colon after each case statement.
   switch (phones[i]) {
      case "Photon 6E":  cellTag = "<td class='group1'>"; break; // Added colon after case "Photon 6E"
      case "Photon 6X":  cellTag = "<td class='group2'>"; break; // Added colon after case "Photon 6X"
      case "Photon 7E":  cellTag = "<td class='group3'>"; break; // Added colon after case "Photon 7E"
      case "Photon 7X":  cellTag = "<td class='group4'>"; break; // Added colon after case "Photon 7X"
      case "Photon 8P":  cellTag = "<td class='group5'>"; break; // Added colon after case "Photon 8P"  
   }
   
   // Table cell containing information on phone and total sales (formatted using a thousands-separator)
   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";
   
   // For loop to create a table cell, 1 for each percentage value in the barPercent variable
   for (let j = 0; j <= barPercent; j++) {
      barChart += cellTag + "</td>";
   }
   barChart += "</tr>";

   // Insert the barChart HTML code into first tbody element in the web document
   // Error 7: Added the missing [0] after getElementsByTagName("tbody") to access the first tbody element
   document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeEnd", barChart); 
}


// Callback function that adds the value of each array element to the totalSales variable
function addToTotal(arrValue) {
   totalSales += arrValue;
}


// Function that takes a number value and returns it as a text string with a thousands separator
function formatNumber(value) {
   return value.toLocaleString();
}
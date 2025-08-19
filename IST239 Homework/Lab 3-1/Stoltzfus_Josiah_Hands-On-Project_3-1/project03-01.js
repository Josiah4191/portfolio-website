/*
Josiah Stoltzfus, June 14, 2025, IST239-W01, Hands-On Project 3-1

In Hands-On Project 3-1, I learned how to work with collections of HTML elements using class names in JavaScript.
I practiced using loops to add event listeners and created a function that calculates a total
based on user interaction. I also learned how to update the content of an HTML element using JavaScript,
and how to apply a formatting function to display numeric values as currency.
*/

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
      return "$" + value.toFixed(2);
}

// This gets the collection of items by using their class name in the HTML document and store them in the menuItems variable
let menuItems = document.getElementsByClassName("menuItem");

// This function loops through the collection of items in the menuItems variable and adds up all of the order totals for each item if the items have been checked.
function calcTotal() {
      // Create and initialize orderTotal variable to 0
      let orderTotal = 0;

      // Loop through the menuItems collection
      for (let i = 0; i < menuItems.length; i++) {

            // Check if the item at the current index is checked
            if (menuItems[i].checked) {
                  orderTotal += Number(menuItems[i].value); // If the item is checked, add the value of this item to the orderTotal
            }
      }

      // This statement gets the element in the HTML document with the id of "billTotal" and updates the inner html text
      // The formatCurrency function formats a numeric value as a dollar string
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// This function loops through the items in the menuItems collection, and for each item, attach a click event listener that runs the calcTotal() function
for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
}
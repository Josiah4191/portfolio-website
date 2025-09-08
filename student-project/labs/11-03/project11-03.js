"use strict";
/*
Josiah Stoltzfus, July 27, 2025, IST239-W01, Hands-On Project 11-3

In Hands-On Project 11-3, I learned how to use JavaScript to fetch data from a Perl script and display it in a table. I had to install Perl and set up an Apache server locally to get 
everything working, which helped me see how the browser talks to the server and how they work together to make things run. It was a bit of a process, but I now know how to send user input 
to a script, handle the JSON response, and show the results on a webpage.
*/

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");


// Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function () {

    // Get the values from the user ID and password input boxes
    let user = userIDBox.value;
    let pwd = pwdBox.value;

    // Send a fetch request to the Perl script with the user info in the URL
    fetch("wworders.pl?id=" + user + "&pwd=" + pwd)
    // Convert the response to JSON
    .then(response => response.json())
    // Pass the data to the buildOrderTable function
    .then(json => buildOrderTable(json))
    // Log any errors if the fetch fails
    .catch(error => console.log(error));

}


// Function to display order history within web tables
function buildOrderTable(obj) {

    // If no orders are found, show a message
    if (obj.status === "Orders Not Found") {
        orderResult.innerHTML = "No orders found for this user id and password";
    } else {
        // Start building the first table with the username and total charges
        let htmlCode = `<table id="summary"><tr><th>Name</th><td>${obj.username}</td></tr><tr><th>Total Charges</th><td>${obj.totalCharges}</td></tr></table>`;

        // Loop through each order in the history
        for (let i = 0; i < obj.orderHistory.length; i++) {
            let order = obj.orderHistory[i];

            // Add a new table for each order with the date and cost
            htmlCode += `<table class="orderList">
            <tr><th colspan="2">${order.orderDate}</th><th colspan="2">${order.orderCost}</th></tr>
            <tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>`;

            // Loop through each product in the order
            for (let j = 0; j < order.products.length; j++) {
                let product = order.products[j];

                // Add a row for each product with its info
                htmlCode += `<tr>
                            <td>${product.description}</td>
                            <td>${product.qty}</td>
                            <td>${product.price}</td>
                            <td>${product.total}</td>
                            </tr>`;
            }

            // Close the table
            htmlCode += "</table>";

        }

        // Display the HTML in the page
        orderResult.innerHTML = htmlCode;

    }
}


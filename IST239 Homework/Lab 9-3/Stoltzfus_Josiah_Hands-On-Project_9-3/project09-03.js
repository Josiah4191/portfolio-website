"use strict";
/*
Josiah Stoltzfus, July 18, 2025, IST239-W01, Hands-On Project 9-3

In Hands-On Project 9-3, I learned how to store and retrieve data using localStorage to track the user's last visit and label new articles.
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

// Check if there's a date stored in the 'sbloggerVisit' key in localStorage
if (localStorage.sbloggerVisit) {
    let storedLastDate = localStorage.getItem("sbloggerVisit"); // Get the value from the sbloggerVisit key in localStorage
    lastVisitDate.textContent = storedLastDate; // Set the text content of the lastVisitDate element to show the value of the storedLastDate
    let lastDate = new Date(storedLastDate); // Create a new date object from the value of the storedLastDate

    // Loop through each date in articleDates and compare each date with the lastDate 
    for (let date of articleDates) { 
        let articleDate = new Date(date.textContent); // Create date object using the article's date from the current loop iteration

        // If the article was posted after the user's last visit, add "new" to the date element
        if (articleDate > lastDate) {
            date.innerHTML += "<strong>new</strong>"; // Update the current date element to display “new” in bold text
        }
    }
} else {
    // If there is no value for 'sbloggerVisit' in localStorage, then set the textContent for the element with the id 'lastVisitDate' to 'Welcome to SBlogger!'
    lastVisitDate.textContent = "Welcome to SBlogger!";

    // Loop through the items in the articleDates array and add "new" to all the date elements
    for (let date of articleDates) {
        date.innerHTML += "<strong>new</strong>";
    }
}

// Create a date object with a hardcoded value and format it using toLocaleDateString for testing
let currentDate = new Date("9/12/2024").toLocaleDateString();

// Set the currentDate value to localStorage using "sbloggerVisit" key
localStorage.setItem("sbloggerVisit", currentDate);


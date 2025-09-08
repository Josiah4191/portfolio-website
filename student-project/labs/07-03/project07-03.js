"use strict";
/*
Josiah Stoltzfus, July 5, 2025, IST239-W01, Hands-On Project 7-3

In Hands-On Project 7-3, I learned how to use JavaScript to work with dates and times to show how much time is left until New Year's.
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// This method sets up the countdown function to run every 1 second, and it will update the boxes to show the time left until New Year's.
setInterval(countdown, 1000);

function countdown() {
    // This statement creates a date object that represents the current date and time and stores it in the now variable.
    let now = new Date();

    // This statement uses the toLocaleString() method on the now date object and sets the text content of the currentTime element, which will display it as a readable date and time.
    currentTime.textContent = now.toLocaleString();

    // This statement creates a new date object and sets the date to January 1, 2024, and it stores the date object in the newYear variable
    let newYear = new Date("January 1, 2024");

    // This statement creates a new variable named nextYear, and uses the now date object and calls the getFullYear() method, which returns the year of the date object, and adds 1 to that year.
    let nextYear = now.getFullYear() + 1;

    // This statement uses the newYear date object and changes the year to value of the nextYear variable.
    newYear.setFullYear(nextYear);

    // This statement calculates the number of days left until New Year's by finding the difference between newYear and now, in milliseconds, and converting it to days.
    let daysLeft = (newYear - now) / (1000 * 60 * 60 * 24);
    //console.log(daysLeft);

    // This statement gets the number of hours left and stores it in the hrsLeft variable. Math.floor(daysLeft) will get rid of the fractional part of the value, and if you subtract that from daysLeft, it will give you the fraction.
    let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    // This statement gets the number of minutes left and stores it in the minsLeft variable. The same technique used for the hours left is used here, and it's also used to get the seconds below.
    let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

    // This statement gets the number of seconds left and stores it in the secsLeft varaible.
    let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    // These statements set the text content of each element to the remaining time, using Math.floor() to round down to whole numbers. JavaScript will automatically convert the numbers to strings.
    daysLeftBox.textContent = Math.floor(daysLeft);
    hrsLeftBox.textContent = Math.floor(hrsLeft);
    minsLeftBox.textContent = Math.floor(minsLeft);
    secsLeftBox.textContent = Math.floor(secsLeft);




}
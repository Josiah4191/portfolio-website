"use strict";
/*
Josiah Stoltzfus, July 12, 2025, IST239-W01, Hands-On Project 8-1

In Hands-On Project 8-1, I built a simple timer using a constructor function and prototype method.
I created the countdown function, added event listeners, and made a timer object to manage time updates.

*/

/*--------------- Object Code --------------------*/

// This is the constructor function for the timer object.
// It takes a starting number of minutes and seconds, and sets up a timeID to stop or start the countdown.
function timer(min, sec) {
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

// This method starts or stops the timer depending on whether it's running or not.
// If it's running, we clear the interval. If not, we start a new countdown.
timer.prototype.runPause = function(timer, minBox, secBox) {

    // Check if the timeID has a value. If it does have a value, then the timer is currently running, so clear it using clearInterval method to stop it from running.
    if (timer.timeID) {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    } else { // If it doesn't have a value, then it is not running, so we call the countdown method to start the countdown.
        timer.timeID = window.setInterval(function() {
            countdown(timer, minBox, secBox);
        }, 1000);
    }
}


/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// This is the countdown function that updates the timer every second.
// It decreases seconds, and if seconds reach 0, it decreases minutes.
// When the timer runs out, it stops the interval.
function countdown(timer, minBox, secBox) {
    if (timer.seconds > 0) { // If the timer.seconds is greater than 0, reduce it by 1
        timer.seconds--;
    } else if (timer.minutes > 0) { // If the timer.minutes is greater than 0 and the timer.seconds is equal to 0, reduce it by 1
        timer.minutes--;
    } else { /// If the seconds and minutes are equal to 0, then stop the timer by calling the clearInterval method and pass the timeID to it.
        window.clearInterval(timer.timeID);
        timer.timeID = null; // Set the timeID to null
    }

    // Update the boxes with the current timer values
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
    
}

// Create the timer object using the current values from the input boxes
let myTimer = new timer(minBox.value, secBox.value);

// When the user changes the minutes box, update the timer's minute value
minBox.addEventListener("change", function() {
    myTimer.minutes = parseInt(minBox.value);
});

// Whenever the user changes the seconds box, update the timer's seconds value
secBox.addEventListener("change", function() {
    myTimer.seconds = parseInt(secBox.value);
});

// Connect the run/pause button so it starts or stops the timer
runPauseTimer.addEventListener("click", function() {
    myTimer.runPause(myTimer, minBox, secBox);
});

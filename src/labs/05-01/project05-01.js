"use strict";
/*
Josiah Stoltzfus, June 22, 2025, IST239-W01, Hands-On Project 5-1

In Hands-On Project 5-1, I learned how to automatically run a function using the setInterval() method in order to update values in the HTML document. 
I also learned how to access all elements that match a specific CSS selector using the querySelectorAll() method.
*/


// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// Declare the timeID variable but don't set an initial value
let timeID; // Creates the variable and value is undefined


// and the node list for questions
// Declare the questionList variable and store the node list that's returned from the querySelectorAll() method using "div#quiz input" as the CSS selector
let questionList = document.querySelectorAll("div#quiz input"); // Creates the variable and assigns it to the return value of the querySelectorAll using the specified CSS selector


// Add an onclick event handler to the startQuiz object
startQuiz.onclick = function() {
   overlay.className = "showquiz"; // Set the class name to "showquiz"
   timeID = window.setInterval(countdown, 1000); // Use the setInterval method to run the countdown method every 1 second and store the return ID of the timer in the timeID variable so it can be stopped later
}


// Create the countdown() function to update the quiz clock.
function countdown() {
   if (timeLeft === 0) { // Check if the time left is equal to 0
      window.clearInterval(timeID); // Stop the countdown by clearing the interval using timeID
      let totalCorrect = checkAnswers(); // Declare variable to store the number of correct answers returned from the checkAnswers() method

      if (totalCorrect === correctAnswers.length) { // Check if the number of correct answers is equal to the length of the correctAnswers array
         window.alert("Congratulations. You earned 100%"); // If all of the answers are correct, create an alert window that congratulates the user
      } else {
         window.alert("Your results: " + totalCorrect + "/" + correctAnswers.length); // If the answers are not all correct, then show how many questions they got right out of how many total questions there were
         timeLeft = quizTime; // Reset the timeLeft variable to the quizTime (20)
         quizClock.value = timeLeft; // Reset the quizClock value to the timeLeft value
         overlay.className = "hidequiz"; // Change the class name of the overlay element to "hidequiz"
      }
   } else {
      timeLeft--; // Reduce timeLeft by 1
      quizClock.value = timeLeft; // set the quizClock value to the timeLeft value
   }
}


















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}


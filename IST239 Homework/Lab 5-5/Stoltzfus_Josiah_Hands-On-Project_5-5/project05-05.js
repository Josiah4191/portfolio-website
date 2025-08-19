"use strict";
/*
Josiah Stoltzfus, June 22, 2025, IST239-W01, Hands-On Project 5-5

In Hands-On Project 5-5, I corrected errors in the scrambleTiles() and playConcentration() functions that were preventing the tiles from visually changing as expected when clicked.
*/

// Reference to the game board
let board = document.getElementById("board");

// Reference to the tiles within the game board
let allTiles = document.getElementsByClassName("tile");

// Objects that will reference the first and second tile clicked by the player
let firstFlipped;
let secondFlipped;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration)


// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
   for (let i = 0; i <= allTiles.length; i++) { // FIXED ERROR 1:  In the for loop condition, <= was used incorrectly. Changed to < to prevent accessing an index outside the array
      
      // Random index integer from 0 to the number of tiles minus 1
      let randomIndex = Math.floor(allTiles.length*Math.random());
      
      // Randomly insert a tile before the current tile in the loop
      board.insertBefore(board.children[i], board.children[randomIndex]); // FIXED ERROR 2: The 'insert' method is not a valid method. Changed 'insert' to 'insertBefore' 
   }
}


// Function that sets up the game play
function playConcentration() {
   // Create event handlers for all tiles in the game board
   for (let i = 0; i < allTiles.length; i++) {
      
      // Run when a tile is clicked
      allTiles[i].onclick = function() {
         // Test to see if the back of the tile is displayed
         // FIXED ERROR 1: 'This' should be lowercase. Changed 'This.lastElementChild.className' to 'this.lastElementChild.className'. ALso, a single = sign was being used for comparison, which is incorrect
         // FIXED ERROR 2: A single equal sign (=) is used for assignment. Changed the single equal sign (=) to triple equal sign (===), which checks if the values are equal and of the same type
         if (this.lastElementChild.className === "back") {
            
            tilesFlipped++;  // increase the flip count by 1
            
            // FIXED ERROR 3: A single equal sign (=) is used for assignment. Changed the single equal sign (=) to triple equal sign (===), which checks if the values are equal and of the same type
            if (tilesFlipped === 1) {
               // if this is the first tile clicked then flip it
               // FIXED ERROR 4: 'This' is capitalized again. Changed 'This' to 'this'
               firstFlipped = this;
               firstFlipped.appendChild(firstFlipped.firstElementChild);
            // FIXED ERROR 5: A single equal sign (=) is used for assignment. Changed the single equal sign (=) to triple equal sign (===), which checks if the values are equal and of the same type
            } else if (tilesFlipped === 2) {
               // if this is the second tile clicked then flip it
               // and then flip both tiles back after 1 second
               // FIXED ERROR 6: 'This' is capitalized again. Changed 'This' to 'this'
               secondFlipped = this;
               secondFlipped.appendChild(secondFlipped.firstElementChild);
               // FIXED ERROR 7: The instructions say in step 5 that the flipBack() function will run after a 1-second delay. That means there is an error here. The argument 1 should be 1000 because it represents miliseconds.
               timeID = window.setTimeout(flipBack, 1000);
            }
         }
      }
   }  
   
   /* Function to flip the two tiles if they don't match */
   function flipBack() {
      // test to determine whether the tile images don't match
      if (firstFlipped.lastElementChild.src !== secondFlipped.lastElementChild.src) {   
         
         // if they don't match, then flip each one
         firstFlipped.appendChild(firstFlipped.firstElementChild);
         secondFlipped.appendChild(secondFlipped.firstElementChild);
      }
      
      // Reset the tiles flipped counter to zero
      // FIXED ERROR: The wrong variable was being used. Changed 'titlesFlipped' to 'tilesFlipped'
      tilesFlipped = 0;
   }   
}



"use strict";
/*
Josiah Stoltzfus, July 18, 2025, IST239-W01, Hands-On Project 10-5

In Hands-On Project 10-5, I learned how to spot errors in keyboard input handling for a game. I fixed issues with key input, made letters show up in uppercase, and used the correct event listener method instead of outdated code.
*/

// Event handler to for keydown events within the current document
// FIXED: The onkeypress event handler property is deprecated. I changed it to use the addEventListener method to assign the selectLetter() method to the keydown event.
document.addEventListener("keydown", selectLetter);

// Function to apply keyboard actions to select a letter or navigate the puzzle
function selectLetter(e) {
   
   // FIXED: Changed 'event.preventDefault()' to 'e.preventDefault()'
   e.preventDefault();
   
   // Reference the letter to the left of the current letter
   let leftLetter = document.getElementById(currentLetter.dataset.left);
   
   // Reference the letter above the current letter
   let upLetter = document.getElementById(currentLetter.dataset.up);
   
   // Reference the letter to the right of the current letter
   let rightLetter = document.getElementById(currentLetter.dataset.right); 
   
   // Reference the letter below the current letter
   let downLetter = document.getElementById(currentLetter.dataset.down); 
   
   // Get the key typed by the player
   // FIXED: Changed 'e.code' to 'e.key'. .key returns the actual key that was pressed. .code only returns the physical key names.
   let userKey = e.key;
 
   if (userKey === "ArrowLeft") { // Move left 
      formatPuzzle(leftLetter);  
      
   } else if (userKey === "ArrowUp") { // Move up
      formatPuzzle(upLetter);  
      
   } else if (userKey === "ArrowRight" || userKey === "Tab") { // Move right
      formatPuzzle(rightLetter);  
      
   } else if (userKey === "ArrowDown" || userKey === "Enter") { // Move down
      formatPuzzle(downLetter);  
      
   } else if (userKey === "Backspace" || userKey === "Delete") { // Delete the character
      currentLetter.textContent = ""; 
      
      // FIXED: Changed 'Space' to an empty space string " ". Since the userKey is the key, then it returns an empty space. The code would return 'Space'
   } else if (userKey === " ") { // Toggle the typing direction
      switchTypeDirection();  
      
   } else if (userKey >= "a" && userKey <= "z") { // Write the character
      // FIXED: Add .toUpperCase() method to the userKey so that it sets the text content to the upper case letter.
      currentLetter.textContent = userKey.toUpperCase(); 
      
      if (typeDirection === "right") {
         formatPuzzle(rightLetter);  // Move right after typing the letter
      } else {
         formatPuzzle(downLetter);  // Move down after typing the letter
      }
   }

}


"use strict";
/*
Josiah Stoltzfus, July 18, 2025, IST239-W01, Hands-On Project 10-1

In Hands-On Project 10-1, I learned how to make puzzle pieces draggable by using pointer events. I added code to move a piece when it’s clicked and dragged, and to stop moving it when the pointer is released.
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img"); // Get a list of all the elements with the puzzleBoard img

// Loop through each piece element in the pieces list
for (let piece of pieces) {
   piece.addEventListener("pointerdown", grabPiece); // Add an event listener with the 'pointerdown' event and assign the grabPiece function to each piece
}

// This function is assigned to the 'pointerdown' event for each puzzle piece. It will fire off when a puzzle piece is clicked and the click is held down
function grabPiece(e) {
   pointerX = e.clientX; // Get the x coordinate location where the click occurred on the screen. 'e' is the event object
   pointerY = e.clientY; // Get the y coordinate location where the click occurred on the screen. 'e' is the event object

   // This sets the touch action to nothing. Setting it to 'none' disables the default touch
   // 'e' is the event object
   // 'target' refers to the element that was clicked
   // 'style' is an object with key values corresponding to css styles
   // 'touchAction' is the CSS property that controls how touch input is handled
   e.target.style.touchAction = "none";
   // This sets the zIndex CSS property to the zCounter value and increments it by 1.
   e.target.style.zIndex = zCounter++;

   pieceX = e.target.offsetLeft; // set pieceX to the horizontal postion of peice that was clicked relative to its container
   pieceY = e.target.offsetTop; // set pieceY to the vertical postion of peice that was clicked relative to its container

   document.addEventListener("pointermove", movePiece); // add the event listener to the document for the 'pointermove' event and assign the movePiece function to it
   document.addEventListener("pointerup", dropPiece); // add the event listener to the document for the 'pointermove' event and assign the dropPeice function to it
   
}

// This function calculates how far the pointer has moved from its starting position
function movePiece(e) {
   let diffX = e.clientX - pointerX;
   let diffY = e.clientY - pointerY;
   
   // This updates the position for the puzzle piece element by changing CSS properties. The difference is added to the starting position for peiceX and pieceY.
   e.target.style.left = pieceX + diffX + "px";
   e.target.style.top = pieceY + diffY + "px";

}

// This function removes the event listener for the 'pointermove' and 'pointerup' events on the document. This is done to stop the dragging because the user released the mouse click.
function dropPiece(e) {
   document.removeEventListener("pointermove", movePiece);
   document.removeEventListener("pointerup", dropPiece);
}

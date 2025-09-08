/*    
      Josiah Stoltzfus, June 8, 2025, IST239-W01, Hands-On Project 2-5

      In Hands-On Project 2-5, I fixed several syntax and logic errors in the JavaScript code. I corrected event handlers, fixed the condition that was preventing the 0 button from working.
 */

      // ------------ SECTION 1 ----------- //
// Add event handlers for each calculator button sending that buttons value to the runCalculator() function
document.getElementById("button0").onclick = function() { // Section 1 > Error 1: change 'click' property to 'onclick'
   runCalculator(0);
}

document.getElementById("button1").onclick = function() {
   runCalculator(1);
}

document.getElementById("button2").onclick = function() {
   runCalculator(2);
}

document.getElementById("button3").onclick = function() {
   runCalculator(3);
}

document.getElementById("button4").onclick = function() {
   runCalculator(4);
}

document.getElementById("button5").onclick = function() {
   runCalculator(5);
}

document.getElementById("button6").onclick = function() {
   runCalculator(6);
}

document.getElementById("button7").onclick = function() {
   runCalculator(7);
}

document.getElementById("button8").onclick = function() {
   runCalculator(8);
}

document.getElementById("button9").onclick = function() {
   runCalculator(9);
}

document.getElementById("buttonAdd").onclick = function() {
   runCalculator("+");
}

document.getElementById("buttonMinus").onclick = function() {
   runCalculator("-"); // Section 1 > Error 2: change runcalculator to runCalculator
}

document.getElementById("buttonMultiply").onclick = function() {
   runCalculator("*");
}

document.getElementById("buttonDivide").onclick = function() { // Section 1 > Error 3: add missing parentheses after function keyword
   runCalculator("/");
}

document.getElementById("buttonDecimal").onclick = function() {
   runCalculator(".");
}

// Send an empty text string if the Enter key is clicked
document.getElementById("buttonEnter").onclick = function() {
   runCalculator("");
}

// Clear the calculator window if the C key is clicked
document.getElementById("buttonClear").onclick = clearCalculator; // Section 1 > Error 4: Remove the parentheses to clearCalculator. They should not be there when assigning the onclick eventhandler.


      // ------------ SECTION 2 ----------- //
// Function to enter characters into the calculator window based on what is clicked
function runCalculator(character) {
   // Retrieve the characters in the calculator window
   let calcValue = document.getElementById("calcWindow").value;

   
   // Add the character to the calculator string or if its empty (the enter key) evaluate the equation
   // Originally, the condition was 'character', but this caused issues when 0 was passed. In JavaScript, 0 is a false value,
   // meaning it caused the condition to evaluate to false, triggering the evaluation step even though 0 should be treated as input.
   // By changing the condition to 'character !== ""', it makes it so that only an actual empty string (passed when enter is clicked)
   // will cause the expression to evaluate. All valid input characters, including 0, will now be added to the calculator string.
   (character !== "") ? calcValue += character : calcValue += " = " + evalEq(calcValue) + "\n"; // Section 2 > Error 1: Replace the triple question mark (???) with a single question mark (?) so the condition uses the correct comparison character



   // Update the characters displayed in the calculator window.
   document.getElementById("calcWindow").value = calcValue; // Section 2 > Error 2: Change calc_value to calcValue
}



      // ------------ SECTION 3 ----------- //
// Function to clear the calculator window
function clearCalculator() {
      document.getElementById("calcWindow").value =""; // Section 3 > Error 1: Change calcwindow to calcWindow
}


/* ===================================================================== */

// Function to evaluate a text string containing an equation, returning a numeric value to a specified number of decimals
function evalEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(6);
}  

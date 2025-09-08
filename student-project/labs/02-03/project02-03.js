/*    
      Josiah Stoltzfus, June 8, 2025, IST239-W01, Hands-On Project 2-3

      In Hands-On Project 2-3, I used JavaScript to show messages when you hover over shapes. It helped me learn how to change page content with events.
/*
      This code selects the element with the ID "square" from the HTML document and assigns an anonymous function to its onmouseover event handler.
*/
document.getElementById("square").onmouseover = function () {
      // This statement gets the element with the ID "feedback" and changes its text when the square element is hovered over.
      document.getElementById("feedback").innerHTML = "You're hovering over the square.";
};

/*
      This code selects the element with the ID "triangle" from the HTML document and assigns an anonymous function to its onmouseover event handler.
*/
document.getElementById("triangle").onmouseover = function () {
      // This statement gets the element with the ID "feedback" and changes its text when the triangle element is hovered over.
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle.";
};

/*
      This code selects the element with the ID "circle" from the HTML document and assigns an anonymous function to its onmouseover event handler.
*/
document.getElementById("circle").onmouseover = function () {
      // This statement gets the element with the ID "feedback" and changes its text when the circle element is hovered over.
      document.getElementById("feedback").innerHTML = "You're hovering over the circle.";
};
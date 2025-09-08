"use strict";
/*
Josiah Stoltzfus, August 3, 2025, IST239-W01, Hands-On Project 12-3

In Hands-On Project 12-3, I learned how to use jQuery to toggle a list and switch an image when a heading is clicked.
*/

// When any <h2> inside <article> is clicked
$("article > h2").click(function(e) {

    // Get the clicked heading as a plain DOM element
    let heading = e.target;

    // Get the next sibling element
    let list = $(heading).next();

    // Get the <img> inside the heading
    let headingImage = $(heading).children("img");

    // Toggle the visibility of the list with a slide animation
    list.slideToggle(500);

    // If the image is showing plus, switch to minus
    if (headingImage.attr("src") === "plus.png") {
        headingImage.attr("src", "minus.png");

    // Otherwise, switch it back to plus
    } else {
        headingImage.attr("src", "plus.png");
    }

});
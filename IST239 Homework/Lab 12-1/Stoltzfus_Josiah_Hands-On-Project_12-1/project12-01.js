"use strict";
/*
Josiah Stoltzfus, August 3, 2025, IST239-W01, Hands-On Project 12-1

In Hands-On Project 12-1, I learned how to use jQuery to show and hide a submenu on hover with simple, clean code.
*/

// Run this after the page is fully loaded
$( () => {

     // When the mouse goes over any <li> with class "submenu"
    $("li.submenu").mouseover( function(e) {
        // Show the <ul> inside that <li>
        $(e.currentTarget).children("ul").show();
    // When the mouse leaves the <li>
    }).mouseout(function(e) {
        // Hide the <ul> inside that <li>
        $(e.currentTarget).children("ul").hide();
    });

});



                                                
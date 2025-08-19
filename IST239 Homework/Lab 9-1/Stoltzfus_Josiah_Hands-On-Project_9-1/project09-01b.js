"use strict";
/*
Josiah Stoltzfus, July 18, 2025, IST239-W01, Hands-On Project 9-1

In Hands-On Project 9-1, I learned how to read values from a URL query string, parse the string, and use the values to update page content.
*/

// get the query search string from the url and remove the ? from the beginning
let query = location.search.slice(1);

// replace the plus signs in the query string with spaces
query = query.replace(/\+/g, " ");

// decode any encoded characters in the string
query = decodeURIComponent(query);

// convert the query string into an array by dividing it at each & symbol so each value is a key=value pairs.
let cardFields = query.split(/\&/g);

// this for loop will loop through the cardFields array (each key=value pair). Each item in the cardFields is a string of key=value
for (let card of cardFields) {
    let nameValue = card.split("="); // split the current item into another array at the = sign
    let name = nameValue[0]; // get the first item in the nameValue array (the key)
    let value = nameValue[1]; // get the second item in the nameValue array (the value)
    document.getElementById(name).textContent = value; // set the textContent of the element with the name id to the value
    //console.log(name + " " + value);
}

//console.log(query);
//console.log(cardFields);
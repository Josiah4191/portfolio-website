"use strict";
/*
Josiah Stoltzfus, July 27, 2025, IST239-W01, Hands-On Project 11-1

In Hands-On Project 11-1, I used the fetch method to get data from NASA’s API and displayed either a video or image based on the media type. It helped me understand how to work with the fetch() method, promises, and JSON.
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   

    // Get the selected date from the input box
    let dateStr = dateBox.value;

    // Make a request to NASA's API using the selected date
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + dateStr)
    // Convert the response to JSON
    .then(response => response.json())
    // Pass the JSON data to the showPicture function
    .then(json => showPicture(json))
    // If something goes wrong, log the error
    .catch(error => console.log(error));
}

// This function displays the media from the API response if its an image or video
function showPicture(json) {
    // Check if the media type is a video
    if (json.media_type === "video") {
    /*
        Set the inner HTML of imageBox to show:
            The title of the video
            An embedded video player with the video URL
            A short explanation below the video
    */
    imageBox.innerHTML = `
        <h1>${json.title}</h1>
        <iframe src="${json.url}" frameborder="0" allowfullscreen></iframe>
        <p>${json.explanation}</p>
    `;

    // If the media type is an image
    } else if (json.media_type === "image") {
    /*
        Set the inner HTML of imageBox to show:
            The title of the image
            The image itself with alt text
            A short explanation below the image
    */
    imageBox.innerHTML = `
        <h1>${json.title}</h1>
        <img src="${json.url}" alt="${json.title}">
        <p>${json.explanation}</p>
    `;

    // If the media type is not a video or image
    } else {
    // Show a basic message saying the media isn't available
    imageBox.innerHTML = "Image not Available";
    }
}

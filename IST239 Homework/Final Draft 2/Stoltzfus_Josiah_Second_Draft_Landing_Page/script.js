/*
    Josiah Stoltzfus, July 13, 2025, IST239-W01, Project Landing Page

    Second Draft:
        I created a JSON file to store the lab titles, descriptions, and links.
        I added descriptions for labs 7 through 8, since those labs have been completed since the last update.
        I used JavaScript to read the JSON file and dynamically populate the HTML with each lab’s title, link, and description.
*/

// Get a list of all the div elements with the class name 'lab'
let labDivList = document.getElementsByClassName("lab");
console.log(labDivList);

// Get a list of all the lab objects in the JSON file by fetching labs.json
fetch("labs.json").then(function(response) {
    // Once the file is loaded, convert the raw text response into an object. This object will be a list of JavaScript objects representing each lab.
    return response.json().then(function(data) {
        // Call the function loadLabs and pass the data array of JavaScript objects.
        loadLabs(data);
        // Output the data to the console for testing.
        console.log(data);
    });
});

// This function will dynamically populate the HTML document with the lab title, description, and link. The data is a list of the JSON objects that is returned from the fetch method.
function loadLabs(data) {
    // This for loop will loop through the length of the list of div elements
    for (let i = 0; i < labDivList.length; i++) {
        // create 'a' element
        let aElement = document.createElement("a");
        // create 'p' element
        let pElement = document.createElement("p");
        // get the current div element
        let currentDiv = labDivList[i];
        // get the current lab object title
        let currentLabTitle = data[i].title;
        // get the current lab object description
        let currentLabDescription = data[i].description;
        // get the current lab object link
        let currentLabLink = data[i].link;

        // set the text content for the lab title
        aElement.textContent = currentLabTitle;
        // set the href attribute to the current lab link
        aElement.href = currentLabLink;
        // set the text content for the paragraph to the lab description
        pElement.textContent = currentLabDescription;
        
        // add the a element to the div
        currentDiv.appendChild(aElement);
        // add the p element to the div
        currentDiv.appendChild(pElement);
    }
}

/*
    Josiah Stoltzfus, August 3, 2025, IST239-W01, Final Project

    This script initializes the site’s navigation, labs, news, game, preferences, and contact functionality.

    Features:
    - Navigation tab switching
    - Dynamic lab loading from JSON
    - News update rendering from JSON
    - Word puzzle game setup with selectable categories
    - Customizable theme and font preferences with persistence
    - Contact form with tooltip copy and category selection
*/

import PreferencesManager from './preferences/preferences-manager.js';
import ContactManager from './contact/contact-manager.js';
import WordListLoader from './game/word-list-loader.js';
import WordPuzzle from './game/word-puzzle.js';
import WordPuzzleView from './game/word-puzzle-view.js';
import WordSelector from './game/word-selector.js';

// ===== Navigation ===== //

// Select all navigation bar items
let navItems = document.querySelectorAll(".nav-item");
// Select all section elements
let sections = document.querySelectorAll(".section");

// Add event listener to each nav item
navItems.forEach(item => {
    item.addEventListener("click", () => {

        // Get the target section to show from data-section attribute
        let section = item.getAttribute("data-section");

        // Remove active class from all nav items
        navItems.forEach(item => {
            item.classList.remove("active");
        })

        // Add active class to clicked item
        item.classList.add("active");

        // Show the selected section
        showSection(section);
    })
})

// Show only the section matching the selected ID
function showSection(section) {
    for (let s of sections) {
        // Show if ID matches, otherwise hide
        if (section === s.id) {
            s.classList.add("visible");
        } else {
            s.classList.remove("visible");
        }
    }
}


// ===== Labs Section ===== //

// Get all divs with the class 'lab'
let labDivList = document.getElementsByClassName("lab");

// Fetch the labs.json file from the data folder
fetch("./data/labs.json").then(function (response) {
    // Convert the raw response to a JSON object
    return response.json().then(function (data) {
        // Call loadLabs with the parsed data
        loadLabs(data);
    });
});

// Dynamically populate lab divs with titles, descriptions, and links
function loadLabs(data) {
    // Loop through each div that will hold a lab entry
    for (let i = 0; i < labDivList.length; i++) {

        // Get the current lab data from the JSON
        let currentLabTitle = data[i].title;
        let currentLabDescription = data[i].description;
        let currentLabLink = data[i].link;

        // Get the corresponding div element
        let currentDiv = labDivList[i];

        // Create a div to hold lab description and link
        let labInfoDiv = document.createElement("div");

        // Add CSS class to style the info box
        labInfoDiv.classList.add("lab-info");

        // Create the anchor (link) element
        let aElement = document.createElement("a");

        // Set the link to open in a new tab
        aElement.setAttribute("target", "_blank");

        // Create a paragraph for the lab description
        let pElement = document.createElement("p");

        // Create a checkbox input to toggle lab visibility
        let checkBox = document.createElement("input");

        // Set checkbox type and assign custom ID
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add("lab-checkbox");
        checkBox.id = currentLabTitle + "-toggle";
        checkBox.hidden = true;

        // Create a label to display the lab title
        let label = document.createElement("label");

        // Set the label to match the checkbox ID
        label.setAttribute("for", currentLabTitle + "-toggle");
        label.classList.add("lab-title");
        label.textContent = currentLabTitle;

        // Set link and description content
        aElement.textContent = "Open Lab";
        aElement.href = currentLabLink;
        pElement.textContent = currentLabDescription;

        // Add description and link to info box
        labInfoDiv.appendChild(pElement);
        labInfoDiv.appendChild(aElement);

        // Add checkbox, label, and info to the current lab div
        currentDiv.appendChild(checkBox);
        currentDiv.appendChild(label);
        currentDiv.appendChild(labInfoDiv);

        // Log parent elements for testing
        console.log("Logging parent info: ");
        console.log(aElement.parentElement);
        console.log(labInfoDiv.parentElement);

    }

}


// ===== News Section ===== //

// Fetch news.json from the data folder
fetch("./data/news.json").then(function (response) {
    // Parse the JSON response
    response.json().then(function (data) {
        // Load the news data into the UI
        loadNews(data);
    });
});

// Load and display news entries on the page
function loadNews(data) {

    // Get the container where news will be shown
    let newsEntries = document.getElementById("news-entries");

    // Create a box to hold all news items
    let newsBox = document.createElement("div");
    newsBox.classList.add("news-box");

    // Loop through news entries in reverse (newest first)
    for (let i = data.length - 1; i >= 0; i--) {

        // Create paragraph for news title
        let title = document.createElement("p");
        title.innerHTML = `📌 <strong>${data[i].category}:</strong> ${data[i].title}`;
        title.classList.add("news-entry");

        // Create paragraph for news date
        let date = document.createElement("p");
        date.innerHTML = `📅 <strong>Date:</strong> ${data[i].date}`;
        date.classList.add("news-entry");

        // Create paragraph for news content
        let content = document.createElement("p");
        content.innerHTML = `📝 <strong>Content:</strong> ${data[i].content}`;
        content.classList.add("news-entry");

        // Create a horizontal line separator
        let separator = document.createElement("hr");

        // Append all elements to the news box
        newsBox.appendChild(title);
        newsBox.appendChild(date);
        newsBox.appendChild(content);
        newsBox.appendChild(separator);

    }

    // Add news box to the page
    newsEntries.appendChild(newsBox);
}

// ===== Game Section ===== //

// Get container for category and words
let wordsOuterContainer = document.getElementById("words-outer-container");

// Get container for the puzzle grid
let gameBoard = document.getElementById("grid");


// Create a new WordListLoader instance
let wordListLoader = new WordListLoader();

// Create a new WordPuzzle instance
let wordPuzzle = new WordPuzzle();

// Create a new WordPuzzleView instance
let wordPuzzleView = new WordPuzzleView();


// Load words from JSON and set up the puzzle
wordListLoader.loadWords("./data/word-list.json").then(() => {

    // Set grid size
    let rows = 15;
    let cols = 15;

    // Get all categories from word list
    let categories = wordListLoader.getCategories();

    // Get the first category title
    let category = categories[0];

    // Get the words for that category
    let words = wordListLoader.getWords(category);

    // Create UI for title and category list
    let wordsInnerContainer = wordPuzzleView.createWordListUI(categories, words, category => { return wordListLoader.getWords(category) }, updateGameBoard);

    // Add UI to the page
    wordsOuterContainer.appendChild(wordsInnerContainer);

    // Create the initial puzzle grid
    updateGameBoard(words);

    // Create and display the puzzle grid
    function updateGameBoard(words) {
        // Clear the current grid
        gameBoard.innerHTML = "";

        // Generate a new puzzle grid
        let grid = wordPuzzle.createGameGrid(words, rows, cols);

        // Create the grid UI
        let gridContainer = wordPuzzleView.createGameBoard(grid);

        // Add word selection interaction
        new WordSelector(gridContainer);

        // Add the grid to the page
        gameBoard.appendChild(gridContainer);
    }

});

// ===== Preferences Section ===== //

// Create a PreferencesManager instance
let preferencesManager;

// Wait until the full HTML document is loaded before accessing DOM elements or initializing preferences
document.addEventListener("DOMContentLoaded", () => {
 
    // Create PreferencesManager instance
    preferencesManager = new PreferencesManager();

    // Load and apply saved preferences
    preferencesManager.loadPreferences();

    // Set event listeners for color pickers (on change)
    document.querySelectorAll("input[type='color']").forEach(picker => {
        picker.addEventListener("change", e => {
            let variable = e.target.dataset.variable;
            let newColor = e.target.value;

            // Save original and apply new color
            handleColorChange(variable, newColor);
        });
    });

    // Set event listeners for color pickers (live input)
    document.querySelectorAll("input[type='color']").forEach(picker => {
        picker.addEventListener("input", e => {
            let variable = e.target.dataset.variable;
            let newColor = e.target.value;

            // Apply color immediately
            preferencesManager.setColor(variable, newColor);

        });
    });

    // Reset preferences when reset button is clicked
    document.querySelector(".reset-button").addEventListener("click", e => {
        preferencesManager.resetPreferences();
    });

    // Change theme when a radio button is selected
    document.querySelectorAll("input[type='radio']").forEach(radio => {

        radio.addEventListener("change", e => {
            if (e.target.checked) {
                let value = e.target.value;
                preferencesManager.setTheme(value);
            }
        });

    });

    // Update font style when an option is selected
    document.querySelectorAll(".font-menu-option").forEach(option => {
        option.addEventListener("click", e => {
            let variable = e.target.dataset.variable;
            let value = e.target.dataset.font;

            // Update display and apply font
            document.querySelector(".current-font").textContent = e.target.textContent + " ▼";
            preferencesManager.setFontStyle(variable, value);

        });
    });

});

// Helper to change color and preserve original if not saved yet
function handleColorChange(variable, color) {
    if (!(variable in preferencesManager.previousColors)) {
        preferencesManager.previousColors[variable] = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }

    preferencesManager.setColor(variable, color);
}


// ===== Contact Section ===== //

// Create a ContactManager instance
let contactManager = new ContactManager();

// Add click events to all clipboard icons
document.querySelectorAll(".tooltip").forEach(icon => {
    icon.addEventListener("click", (e) => {
        // Get the variable to copy
        let variable = e.currentTarget.dataset.variable;

        // Store the original text
        let originalContent = e.currentTarget.textContent;

        // Store the current target
        let currentTarget = e.currentTarget;

        // Copy the value to clipboard
        let copied = contactManager.saveToClipboard(variable);

        // Add ✅ or ❌ based on result
        if (copied) {
            e.currentTarget.textContent += " ✅";
        } else {
            e.currentTarget.textContent += " ❌";
        }

        // Restore original tooltip after delay
        setTimeout(() => {
            currentTarget.textContent = originalContent;
        }, 1500);

    });
});

// Add click events to topic options in contact form
document.querySelectorAll(".topic-option").forEach(topic => {
    topic.addEventListener("click", e => {
        // Get the selected topic from data-variable
        let option = e.currentTarget.dataset.variable;

        // Log and update the selected topic
        console.log(option);
        contactManager.setSelectedOption(option);
    });
})

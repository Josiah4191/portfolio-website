/*
    WordListLoader is responsible for loading and organizing word data from a JSON file.

    Features:
    - Loads word data asynchronously using fetch
    - Stores words under categories parsed from the JSON
    - Provides a list of all available categories
    - Selects up to 6 random, unique, cleaned, uppercase words from a given category
 */

// Export the WordListLoader class as the default export
export default class WordListLoader {
    // Constructor initializes an empty word list object
    constructor() {
        this.wordList = {};
        this.selectedWords;
    }

    // Asynchronously load word data from a JSON file
    async loadWords(jsonFile) {

        // Fetch the JSON file from the provided path
        return fetch(jsonFile).then(async response => {

            // Parse the JSON response
            return response.json().then(data => {

                // Loop through each word list item in the JSON
                for (let item of data) {
                    // Get the category name
                    let category = item.category;

                    // Get the comma-separated word string
                    let words = item.words;

                    // Split and clean up each word (trim whitespace, remove inner spaces)
                    let trimmedWords = words.split(",").map(word => word.trim().replace(/\s+/g, ""));

                    // Store the cleaned word list under its category
                    this.wordList[category] = trimmedWords;

                }
            });
        });
    }

    // Return list of categories
    getCategories() {
        // Get and return all category names from the word list object
        return Object.keys(this.wordList);
    }

    // Return a list of up to 6 random, unique words for the given category
    getWords(category) {
        // Get the full list of words for the specified category
        let words = this.wordList[category];

        // Initialize an empty list to hold the selected words
        let selectedWords = [];

        // Keep selecting words until we have 6 or run out of options
        while (selectedWords.length < 6 && selectedWords.length < words.length) {

            // Pick a random index from the word list
            let randomIndex = Math.floor(Math.random() * words.length);

            // Clean and uppercase the selected word
            let word = words[randomIndex].trim().replace(/\s+/g, "").toUpperCase();

            // Skip duplicates
            if (selectedWords.includes(word)) {
                continue;
            }

            // Add the word to the list
            selectedWords.push(word);
        }

        this.selectedWords = selectedWords;
        // Return the final list of selected words
        return selectedWords;

    }

}









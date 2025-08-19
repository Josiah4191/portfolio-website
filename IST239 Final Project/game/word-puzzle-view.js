/*
    WordPuzzleView is responsible for generating and updating the HTML UI 
    for the word puzzle game, including word lists, category selection, and the game board grid.

    Features:
    - Creates and updates the word list display based on selected category
    - Generates UI for selecting categories and viewing corresponding words
    - Creates the game board grid from a 2D array of letters
*/


export default class WordPuzzleView {
    // Constructor (currently empty but can be used for future)
    constructor() {

    }

    // ========== CATEGORY TITLE AND WORD LIST SECTION ========== //
    // ========================================================== //


    // Generate HTML for the categories and insert into the category-selection div
    createWordListUI(categories, words, getWords, updateGameBoard) {

        // Create a wrapper div to contain all the UI elements
        let wrapperDiv = document.createElement("div");
        wrapperDiv.setAttribute("id", "words-inner-container");

        // Create a wrapper for category title and category words
        let titleWrapper = document.createElement("div");
        titleWrapper.setAttribute("id", "category-title-wrapper");

         // Create a title div displaying the first category
        let titleDiv = this.createTitle(categories[0]);

        // Create a list of category items for user selection
        let categoryList = this.createCategoryList(categories, getWords, updateGameBoard);

        // Create a list of words for the first category
        let wordsList = this.createWordList(words);

        // Add the title and category list to the wrapper
        titleWrapper.appendChild(titleDiv);
        titleWrapper.appendChild(categoryList);

        // Add everything to the main wrapper
        wrapperDiv.appendChild(titleWrapper);
        wrapperDiv.appendChild(wordsList);

        // Return the complete UI component
        return wrapperDiv;
    }


     // Create a title element for the selected category
    createTitle(category) {
        let titleDiv = document.createElement("div");
        titleDiv.setAttribute("id", "category-title");
        titleDiv.textContent = category;

        return titleDiv;
    }


    // Create a list of clickable category options
    createCategoryList(categories, getWords, updateGameBoard) {
        // Create a div to contain the list of categories
        let categoryListDiv = document.createElement("div");
        categoryListDiv.classList.add("category-list-box");

        // Create a <ul> element for category items
        let categoryList = document.createElement("ul");
        categoryList.classList.add("category-list");

        // Add the <ul> to the container div
        categoryListDiv.appendChild(categoryList);

        // Loop through each category and create a clickable list item
        for (let category of categories) {
            let categoryItem = document.createElement("li");
            categoryItem.classList.add("category-item");
            categoryItem.textContent = category;

            // On click, update the word list and game board
            categoryItem.addEventListener("click", () => {
                let words = getWords(category);
                this.updateWordListUI(category, words);
                updateGameBoard(words);
            });

            // Add the item to the list
            categoryList.appendChild(categoryItem);
        }
        return categoryListDiv;
    }

    // Create a visual list of words (spans) for the given category
    createWordList(words) {
        // Create a div to contain the words as spans
        let wordsDiv = document.createElement("div");
        wordsDiv.setAttribute("id", "words-container");
 
        // Create a span element for each word and add it to the container
        for (let word of words) {
            let span = document.createElement("span");
            span.textContent = word;
            wordsDiv.appendChild(span);
        }

        return wordsDiv;
    }

    // Update the displayed word list and category title when a new category is selected
    updateWordListUI(category, words) {
        // Update the title to reflect the new category
        let titleDiv = document.getElementById("category-title");
        titleDiv.textContent = category;

        // Clear the previous word list
        let wordsDiv = document.getElementById("words-container");
        wordsDiv.innerHTML = "";

        // Loop through words list
        for (let word of words) {
            // Create a span for the word
            let span = document.createElement("span");
            span.textContent = word;
            // Add span to the words div container
            wordsDiv.appendChild(span);
        }
    }

    // ========== GAME BOARD GRID CREATION SECTION ========== //
    // ====================================================== //

    // Create the word search grid from a 2D array of letters
    createGameBoard(grid) {
        let wrapper = document.createElement("div");
        wrapper.setAttribute("id", "wrapper");

        // Loop through each row and column in the grid
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                let span = document.createElement("span");
                span.classList.add("letter-span");
                span.textContent = grid[i][j];
                wrapper.appendChild(span);
            }
        }
        return wrapper;
    }

}






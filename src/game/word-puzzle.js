/*
    WordPuzzle is responsible for generating a word search puzzle grid
    by placing words in random directions and filling in empty spaces with random letters.

    Features:
    - Defines 8 possible word placement directions
    - Selects random directions and letters
    - Calculates valid starting positions for word placement
    - Places words on the grid without overlap conflicts
    - Fills remaining empty cells with random letters
*/

export default class WordPuzzle {

    constructor() {

        // Initialize available directions for word placement
        this.directions = {
            "right": { "dy": 0, "dx": 1 },
            "left": { "dy": 0, "dx": -1 },
            "up": { "dy": -1, "dx": 0 },
            "down": { "dy": 1, "dx": 0 },
            "down-right": { "dy": 1, "dx": 1 },
            "down-left": { "dy": 1, "dx": -1 },
            "up-right": { "dy": -1, "dx": 1 },
            "up-left": { "dy": -1, "dx": -1 }
        }
    }

    // Return a random uppercase letter from A-Z
    getRandomLetter() {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters[Math.floor(Math.random() * letters.length)];
    }

    // Return a random direction key from the directions object
    getRandomDirection() {
        let directionKeys = Object.keys(this.directions);
        return directionKeys[Math.floor(Math.random() * directionKeys.length)];
    }

    // Determine a valid starting position to place a word in a given direction
    getStartingPosition(grid, word, direction) {
        // Store valid positions for the word
        let validCoordinates = [];

        // Loop through every grid cell
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {

                let xCoord = col;
                let yCoord = row;

                // Get movement offsets for the given direction
                let { dx: xOffset, dy: yOffset } = this.directions[direction];

                let doesFit = true;

                // Check if the word fits starting from this cell
                for (let i = 0; i < word.length; i++) {
                    let x = xCoord + i * xOffset;
                    let y = yCoord + i * yOffset;

                    // Reject if position goes outside the grid
                    if ((x < 0 || x >= grid[row].length) || (y < 0 || y >= grid.length)) {
                        doesFit = false;
                        break;
                    }

                    // Reject if there's a conflicting letter in the way
                    if ((grid[y][x]) && (grid[y][x] != word[i])) {
                        doesFit = false;
                        break;
                    }
                }

                // If valid, store the starting coordinate
                if (doesFit) {
                    validCoordinates.push({ "x": xCoord, "y": yCoord });
                }
            }

        }

        // If valid positions exist, return one at random
        if (validCoordinates.length > 0) {
            let index = Math.floor(Math.random() * validCoordinates.length);
            return validCoordinates[index];

        } else {
            console.warn("No valid starting positions found.");
            return null;
        }

    }

    // Place a word onto the grid starting at a valid position in the given direction
    placeWord(grid, word, direction) {
        // Get starting position
        let position = this.getStartingPosition(grid, word, direction);

        // check if there is a position
        if (!position) {
            console.warn("Couldn't place word.");
            return;
        }

        // Get direction offsets
        let { dx, dy } = this.directions[direction];

        // Place each letter of the word into the grid
        for (let i = 0; i < word.length; i++) {
            // Get the letter from the word
            let letter = word[i];

            // Get the coordinates
            let x = position.x + i * dx;
            let y = position.y + i * dy;

            // Add the letter to that coordinate in the grid
            grid[y][x] = letter;
        }
    }

    // Create a full puzzle grid, placing each word and filling in random letters
    createGameGrid(words, rowSize, colSize) {
        // Initialize grid with nulls
        let grid = new Array(colSize).fill(null).map(() => (new Array(rowSize).fill(null)));

        // Place each word using a random direction
        for (let word of words) {
            let direction = this.getRandomDirection();
            this.placeWord(grid, word, direction);
        }

        // Fill in remaining empty cells with random letters
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {

                if (!grid[i][j]) {
                    grid[i][j] = this.getRandomLetter();
                }
            }

        }
        // Log the generated grid to the console (for debugging)
        console.log(grid.map(row => row.join(" ")).join("\n"));

        return grid;
    }








}





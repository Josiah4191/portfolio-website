import {DIFFICULTIES} from "../data/Difficulties.js";
import {DIRECTIONS} from "../data/Directions.js"
import {GRID_COLS, GRID_ROWS, MAX_ATTEMPTS} from "../data/PuzzleConfig.js";

export default class WordPuzzle {

    // Return a random uppercase letter from A-Z
    getRandomLetter() {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters[Math.floor(Math.random() * letters.length)];
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Place a word onto the grid starting at a valid position in the given direction
    placeWord(grid, word, difficulty) {
        // Get starting position
        const placement = this.getValidPlacementForDirection(grid, word, difficulty);
        const cells = []

        // check if there is a position
        if (!placement) {
            console.warn("Couldn't place word: " + word + " in grid");
            return;
        }

        const startPosition = {x: placement.x, y: placement.y};
        const direction = placement.direction;

        // Get direction offsets
        let {dx, dy} = DIRECTIONS[direction];

        // Place each letter of the word into the grid
        for (let i = 0; i < word.length; i++) {
            // Get the letter from the word
            let letter = word[i];

            // Get the coordinates
            let x = startPosition.x + i * dx;
            let y = startPosition.y + i * dy;

            // Add the letter to that coordinate in the grid
            grid[y][x] = letter;

            // Add the letter to cells
            cells.push({x, y})
        }

        const endX = startPosition.x + dx * (word.length - 1);
        const endY = startPosition.y + dy * (word.length - 1);

        return {
            "startCell": startPosition,
            "endCell": {x: endX, y: endY},
            word,
            direction,
            cells
        };
    }

    getValidPlacementForDirection(grid, word, difficulty) {
        // Get available directions for given difficulty
        const availableDirections = DIFFICULTIES[difficulty].directions;
        // Shuffle the available directions
        const shuffledDirections = this.shuffleArray([...availableDirections])

        // Loop through all directions
        for (let direction of shuffledDirections) {
            const validPlacements = [];
            // Loop through every grid cell
            for (let row = 0; row < grid.length; row++) {
                for (let col = 0; col < grid[row].length; col++) {

                    let xCoord = col;
                    let yCoord = row;

                    // Get movement offsets for the given direction
                    let {dx: xOffset, dy: yOffset} = DIRECTIONS[direction];

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
                        if ((grid[y][x]) && (grid[y][x] !== word[i])) {
                            doesFit = false;
                            break;
                        }
                    }

                    // If valid, return the starting coordinates
                    if (doesFit) {
                        validPlacements.push({"x": xCoord, "y": yCoord, direction});
                    }
                }
            }

            if (validPlacements.length > 0) {
                return validPlacements[Math.floor(Math.random() * validPlacements.length)];
            }

        }
    }

    // Create a full puzzle grid, placing each word and filling in random letters
    generateWordSearch(words, difficulty) {
        // Initialize grid with nulls
        let successful = true;
        let grid = new Array(GRID_COLS).fill(null).map(() => (new Array(GRID_ROWS).fill(null)));
        const placedWords = []
        // Sort the words by length, descending
        const sortedWords = [...words].sort((a, b) => b.length - a.length);

        // Place each word using a random direction
        for (let word of sortedWords) {
            const placedWord = this.placeWord(grid, word, difficulty);

            if (placedWord) {
                placedWords.push(placedWord);
            } else {
                successful = false;
            }
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
        //console.log(grid.map(row => row.join(" ")).join("\n"));

        return {grid, placedWords, successful};
    }

    buildPuzzle(words, difficulty) {
        let attempts = 0;
        let lastPuzzle = null;
        while (attempts < MAX_ATTEMPTS) {
            const puzzle = this.generateWordSearch(words, difficulty);

            lastPuzzle = puzzle;

            if (puzzle.successful) {
                return puzzle;
            }
            attempts++;

        }

        console.warn(`Failed to generate a valid puzzle after ${MAX_ATTEMPTS} attempts`);
        return lastPuzzle;
    }
}





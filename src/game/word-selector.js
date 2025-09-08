/*
    WordSelector is responsible for handling user interaction when selecting letters 
    from the puzzle grid using pointer events.

    Features:
    - Adds pointer event listeners to the puzzle grid
    - Tracks selection state as the user drags across letter spans
    - Highlights selected letters and resets selection on release
*/

export default class WordSelector {
    // Initialize the selector with the puzzle grid container
    constructor(gridContainer) {
        // Reference to the grid container element
        this.gridContainer = gridContainer;

        // Attach pointer event listeners
        this.addPointerEvents();

        // Flag to track if the user is currently selecting
        this.isSelecting = false;

        // Store selected span elements
        this.selectedSpans = [];
    }

    // Add pointer event listeners for letter selection
    addPointerEvents() {
        this.gridContainer.addEventListener("pointerdown", e => this.beginLetterSelection(e));
        this.gridContainer.addEventListener("pointermove", e => this.trackSelectedLetters(e));
        this.gridContainer.addEventListener("pointerup", e => this.endLetterSelection(e));

    }

    // Handle pointer down to start selecting letters
    beginLetterSelection(e) {
        this.isSelecting = true;

        // Only act if the pointer is over a letter span
        if (e.target.matches(".letter-span")) {
            let span = e.target;

            // If already selected, deselect it
            if (span.classList.contains("selected-letter")) {
                span.classList.remove("selected-letter");
            } else {
                // Otherwise, mark it as selected and track it
                span.classList.add("selected-letter");
                this.selectedSpans.push(span);
            } 
        }
    }

    // Placeholder to handle pointer movement to continue tracking selected letters
    trackSelectedLetters(e) {

    }

    // End the letter selection process and reset state
    endLetterSelection(e) {
        // Clear tracked spans
        this.selectedSpans = [];
        // Reset selection flag
        this.isSelecting = false;
    }







}
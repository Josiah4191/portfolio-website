import './WordSearchPage.css'
import {useEffect, useRef, useState} from "react";
import {drawSelectedCells, drawLetters, drawFoundWords} from "../rendering/puzzleRenderer.js"
import {
    findMatchedWord,
    isAlreadyFound,
    getDirection,
    getCellsInLine,
    validateDirection, cellsMatch
} from "../utils/puzzleUtils.js";
import WordPuzzle from "../domain/WordPuzzle.js";
import {CATEGORIES} from "../data/puzzles.js"
import {GRID_COLS, GRID_ROWS} from "../data/puzzleConfig.js";
import WordList from "../components/WordList.jsx";
import WordSearchCategorySelect from "../components/WordSearchCategorySelect.jsx";
import GameToolbar from "../../GameToolbar.jsx";

/*
    WordSearchPage is responsible for managing the word search game screen.

    Features:
    - Stores puzzle, selection, and found-word state
    - Handles pointer input for selecting words
    - Builds new puzzles from the selected category and difficulty
    - Triggers canvas redraws when game state changes
*/

export default function WordSearchPage() {

    const [isDragging, setIsDragging] = useState(false);
    const [startCell, setStartCell] = useState(null);
    const [currentCell, setCurrentCell] = useState(null);
    const [selectedCells, setSelectedCells] = useState([]);
    const [availableWidth, setAvailableWidth] = useState(0);
    const [puzzle, setPuzzle] = useState(null);
    const [foundWords, setFoundWords] = useState([]);
    const [category, setCategory] = useState("Fruits");

    const categoryOptions = CATEGORIES.map((cat) => cat.category);
    const canvas = useRef(null);
    const canvasContainer = useRef(null);

    const wordPuzzle = new WordPuzzle();
    const cellSize = availableWidth / GRID_COLS;
    const canvasWidth = availableWidth;
    const canvasHeight = GRID_ROWS * cellSize;
    const dpr = window.devicePixelRatio || 1;

    const wordsToDisplay = puzzle?.placedWords.map((placedWord) => {
        const isFound = foundWords.some((foundWord) =>
            cellsMatch(foundWord.cells, placedWord.cells));

        return {
            word: placedWord.word,
            isFound
        };

    }) ?? [];

    function onPointerDown(event) {
        const mouseX = event.nativeEvent.offsetX;
        const mouseY = event.nativeEvent.offsetY;

        const x = Math.floor(mouseX / cellSize);
        const y = Math.floor(mouseY / cellSize);

        setStartCell({x, y});
        setCurrentCell({x, y});
        setIsDragging(true);
    }

    function onPointerUp() {
        updateSelectedCells(startCell, currentCell);
        validateWord();

        setIsDragging(false);
        setStartCell(null);
        setCurrentCell(null);
        setSelectedCells([]);
    }

    function onPointerMove(event) {
        const mouseX = event.nativeEvent.offsetX;
        const mouseY = event.nativeEvent.offsetY;

        const x = Math.floor(mouseX / cellSize);
        const y = Math.floor(mouseY / cellSize);

        if (isDragging) {
            setCurrentCell({x, y});
            updateSelectedCells(startCell, currentCell);
        }
    }

    function validateWord() {
        const matchedWord = findMatchedWord(puzzle, selectedCells);

        if (matchedWord && !isAlreadyFound(foundWords, matchedWord)) {
            setFoundWords((prevWords) => [...prevWords, matchedWord]);
        }
    }

    function updateSelectedCells(startCell, endCell) {
        if (!validateDirection(startCell, endCell)) {
            return
        }

        const direction = getDirection(startCell, currentCell);

        const cells = getCellsInLine(startCell, currentCell, direction);
        setSelectedCells(cells);
    }

    function createPuzzle() {
        const words = CATEGORIES.find(c => c.category === category).words.map(word => word.toUpperCase());
        const puzzle = wordPuzzle.buildPuzzle(words, "hard", GRID_ROWS, GRID_COLS);

        setFoundWords([]);
        setSelectedCells([]);
        setPuzzle(puzzle);
    }

    useEffect(() => {
        function updateWidth() {
            const width = canvasContainer.current.clientWidth;
            setAvailableWidth(width);
        }

        updateWidth();

        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };

    }, []);

    useEffect(() => {
        createPuzzle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    useEffect(() => {
        const context = canvas.current.getContext("2d");
        const canvasElement = canvas.current;

        canvasElement.width = canvasWidth * dpr;
        canvasElement.height = canvasHeight * dpr;

        canvasElement.style.width = `${canvasWidth}px`;
        canvasElement.style.height = `${canvasHeight}px`;

        context.scale(dpr, dpr);

        drawFoundWords(context, cellSize, foundWords, "rgba(78, 159, 110, 0.7)");
        drawSelectedCells(context, selectedCells, cellSize, "rgba(74, 111, 165, 0.7)");
        drawLetters(context, puzzle, cellSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging, startCell, currentCell, selectedCells, puzzle, foundWords, availableWidth]);

    return (
        <main className="word-search-page" aria-labelledby="word-search-title">
            <GameToolbar>
                <button
                    type="button"
                    className="game-toolbar-button"
                    onClick={createPuzzle}>
                    New Puzzle
                </button>
            </GameToolbar>

            <section className="word-search-game">
                <div className="word-search-game-card">
                    <header className="word-search-game-header">
                        <h1
                            id="word-search-title"
                            className="word-search-title">
                            Word Search
                        </h1>

                        <WordSearchCategorySelect
                            value={category}
                            setValue={setCategory}
                            options={categoryOptions}/>

                        <p className="word-search-progress">
                            {`${foundWords.length} / ${puzzle?.placedWords?.length ?? 0} Words Found`}
                        </p>
                    </header>
                    <div className="word-search-board-wrapper" ref={canvasContainer}>
                        <canvas
                            className="word-search-board"
                            ref={canvas}
                            aria-label={`Word search puzzle. ${foundWords.length} of ${puzzle?.placedWords?.length ?? 0} words found.`}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                            onPointerDown={onPointerDown}/>
                    </div>
                    <WordList
                        words={wordsToDisplay}/>
                </div>
            </section>
        </main>
    )
}
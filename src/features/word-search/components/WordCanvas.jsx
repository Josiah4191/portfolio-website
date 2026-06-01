import './WordCanvas.css'
import {useEffect, useRef, useState} from "react";
import {drawSelectedCells, drawLetters, drawFoundWords} from "../rendering/PuzzleRenderer.js"
import {
    findMatchedWord,
    isAlreadyFound,
    getDirection,
    getCellsInLine,
    validateDirection, cellsMatch
} from "../utils/PuzzleUtils.js";
import ControlPanel from "./ControlPanel.jsx";
import WordPuzzle from "../domain/Word-puzzle";
import {CATEGORIES} from "../data/Puzzles.js"
import {GRID_COLS, GRID_ROWS} from "../data/PuzzleConfig.js";
import WordList from "./WordList.jsx";

/*
    WordCanvas is responsible for managing the word search game screen.

    Features:
    - Stores puzzle, selection, and found-word state
    - Handles pointer input for selecting words
    - Builds new puzzles from the selected category and difficulty
    - Triggers canvas redraws when game state changes
*/

export default function WordCanvas() {

    const [isDragging, setIsDragging] = useState(false);
    const [startCell, setStartCell] = useState(null);
    const [currentCell, setCurrentCell] = useState(null);
    const [selectedCells, setSelectedCells] = useState([]);
    const [puzzle, setPuzzle] = useState(null);
    const [foundWords, setFoundWords] = useState([]);
    const [category, setCategory] = useState("Fruits");
    const [activeCategory, setActiveCategory] = useState("Fruits");
    const [difficulty, setDifficulty] = useState("easy");
    const [availableWidth, setAvailableWidth] = useState(0);

    const canvas = useRef(null);
    const canvasContainer = useRef(null);

    const wordPuzzle = new WordPuzzle();
    const cellSize = availableWidth / GRID_COLS;
    const canvasWidth = availableWidth;
    const canvasHeight = GRID_ROWS * cellSize;

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

    function buildPuzzle() {
        const words = CATEGORIES.find(c => c.category === category).words.map(word => word.toUpperCase());
        const puzzle = wordPuzzle.buildPuzzle(words, difficulty, GRID_ROWS, GRID_COLS);

        setFoundWords([]);
        setSelectedCells([]);
        setActiveCategory(category);
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
        // eslint-disable-next-line react-hooks/set-state-in-effect
        buildPuzzle();
    }, []);

    useEffect(() => {
        const context = canvas.current.getContext("2d");
        context.clearRect(0, 0, canvas.current.width, canvas.current.height);
        drawFoundWords(context, cellSize, foundWords, "rgba(154, 92, 77, 0.35)");
        drawSelectedCells(context, selectedCells, cellSize, "rgba(255, 214, 102, 0.45)");
        drawLetters(context, puzzle, cellSize);
    }, [isDragging, startCell, currentCell, selectedCells, puzzle, foundWords, availableWidth]);

    return (
        <div className="word-search-board">
            <div className="word-search-title-wrapper">
                <h1 className="word-search-title">Word Search</h1>
                <hr className="word-search-divider"/>
                <h2 className="h2">{category}</h2>
                <p className="word-search-difficulty-title">{difficulty.charAt(0).toUpperCase() + difficulty.slice(1) + " Difficulty"}</p>
                <p className="word-search-progress-title">{`${foundWords.length} / ${puzzle?.placedWords?.length ?? 0} Words Found`}</p>
            </div>
            <ControlPanel
                activeCategory={activeCategory}
                puzzle={puzzle}
                foundWords={foundWords}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                category={category}
                setCategory={setCategory}
                buildPuzzle={buildPuzzle}/>
            <div className="word-search-canvas-wrapper" ref={canvasContainer}>
                <canvas
                    className="word-search-canvas"
                    width={canvasWidth}
                    height={canvasHeight}
                    ref={canvas}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerDown={onPointerDown}/>
            </div>
            <WordList activeCategory={activeCategory} puzzle={puzzle} foundWords={foundWords}
                      cellsMatch={cellsMatch}/>
        </div>

    )
}
/*
        <div className="section">
            <div className="grid page-margin">

            </div>
        </div>
 */
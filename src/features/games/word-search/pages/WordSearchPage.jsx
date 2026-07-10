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
import {PUZZLES} from "../data/puzzles.js"
import {GRID_COLS, GRID_ROWS} from "../data/puzzleConfig.js";
import WordList from "../components/WordList.jsx";
import WordSearchCategorySelect from "../components/WordSearchCategorySelect.jsx";
import WordSearchToolbar from "../WordSearchToolbar.jsx";
import {Plus} from "lucide-react";

export default function WordSearchPage() {

    const [isDragging, setIsDragging] = useState(false);
    const [startCell, setStartCell] = useState(null);
    const [currentCell, setCurrentCell] = useState(null);
    const [selectedCells, setSelectedCells] = useState([]);
    const [availableWidth, setAvailableWidth] = useState(0);
    const [board, setBoard] = useState(null);
    const [foundWords, setFoundWords] = useState([]);
    const [selectedPuzzle, setSelectedPuzzle] = useState(PUZZLES[0]);

    const canvas = useRef(null);
    const canvasContainer = useRef(null);

    const wordPuzzle = new WordPuzzle();
    const cellSize = availableWidth / GRID_COLS;
    const canvasWidth = availableWidth;
    const canvasHeight = GRID_ROWS * cellSize;
    const dpr = window.devicePixelRatio || 1;

    const wordsToDisplay = board?.placedWords.map((placedWord) => {
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
        const matchedWord = findMatchedWord(board, selectedCells);

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

    function createBoard() {
        const words = selectedPuzzle.words.map(word => word.toUpperCase());
        const board = wordPuzzle.buildPuzzle(words, "hard", GRID_ROWS, GRID_COLS);

        setFoundWords([]);
        setSelectedCells([]);
        setBoard(board);
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
        createBoard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPuzzle]);

    useEffect(() => {

        async function drawPuzzle() {
            await document.fonts.load("500 16px Inter");

            const context = canvas.current.getContext("2d");
            const canvasElement = canvas.current;

            canvasElement.width = canvasWidth * dpr;
            canvasElement.height = canvasHeight * dpr;

            canvasElement.style.width = `${canvasWidth}px`;
            canvasElement.style.height = `${canvasHeight}px`;

            context.scale(dpr, dpr);

            drawFoundWords(context, cellSize, foundWords, "rgb(186 207 170 / 0.7)");
            drawSelectedCells(context, selectedCells, cellSize, "rgb(219 234 210 / 0.7)");
            drawLetters(context, board, cellSize);
        }

        void drawPuzzle();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging, startCell, currentCell, selectedCells, board, foundWords, availableWidth]);

    return (
        <main className={`word-search-page ${selectedPuzzle.theme}`} aria-labelledby="word-search-title">
            <WordSearchToolbar>
                <button
                    type="button"
                    className="word-search-button"
                    onClick={createBoard}>
                    <Plus size={20} strokeWidth={2.3}/>
                    New Puzzle
                </button>
            </WordSearchToolbar>

            <section className={`word-search-game`}>

                <div className={`word-search-game-card`}>
                    <header className="word-search-game-header">
                        <h1
                            id="word-search-title"
                            className="word-search-title">
                            WORD SEARCH
                        </h1>

                        <WordSearchCategorySelect
                            puzzles={PUZZLES}
                            currentPuzzle={selectedPuzzle}
                            setSelectedPuzzle={setSelectedPuzzle}/>

                        <p className="word-search-progress">
                            {`${foundWords.length} / ${board?.placedWords?.length ?? 0} Words Found`}
                        </p>
                    </header>

                    <div className="word-search-play-area">
                        <div className="word-search-board-wrapper" ref={canvasContainer}>
                            <canvas
                                className="word-search-board"
                                ref={canvas}
                                aria-label={`Word search puzzle. ${foundWords.length} of ${board?.placedWords?.length ?? 0} words found.`}
                                onPointerMove={onPointerMove}
                                onPointerUp={onPointerUp}
                                onPointerDown={onPointerDown}/>
                        </div>
                        <WordList
                            words={wordsToDisplay}/>
                    </div>

                </div>
            </section>
        </main>
    )
}

/*
--word-search-success: #6D8A5E;
--word-search-success-light: #DCEAD5;

--word-search-highlight: #D3B06A;
--word-search-highlight-light: #F5E8C8;
*/
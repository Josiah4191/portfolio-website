import {DIRECTIONS} from "../data/Directions.js";

export function cellsMatch(selectedCells, placedCells) {
    if (selectedCells.length !== placedCells.length) {
        return false;
    }

    for (let i = 0; i < selectedCells.length; i++) {
        if (selectedCells[i].x !== placedCells[i].x || selectedCells[i].y !== placedCells[i].y) {
            return false;
        }
    }
    return true;
}

export function findMatchedWord(puzzle, selectedCells) {
    return puzzle.placedWords.find((placedWord) =>
        cellsMatch(selectedCells, placedWord.cells)
    );
}

export function isAlreadyFound(foundWords, matchedWord) {
    return foundWords.some((foundWord) =>
        cellsMatch(foundWord.cells, matchedWord.cells)
    );
}

export function getDirection(startCell, endCell) {
    const directionX = Math.sign(endCell.x - startCell.x);
    const directionY = Math.sign(endCell.y - startCell.y);

    for (const d in DIRECTIONS) {
        if (DIRECTIONS[d].dx === directionX && DIRECTIONS[d].dy === directionY) {
            //      console.log("Direction: " + d);
            return DIRECTIONS[d];
        }
    }
}

export function getCellsInLine(startCell, endCell, direction) {
    const cells = [];
    let currentX = startCell.x;
    let currentY = startCell.y;

    // console.log("Start cells are: " + currentX + ", " + currentY);
    cells.push({"x": currentX, "y": currentY})

    while (currentX !== endCell.x || currentY !== endCell.y) {
        currentX += direction.dx;
        currentY += direction.dy;
        cells.push({"x": currentX, "y": currentY});
    }
    return cells;
}

export function validateDirection(startCell, endCell) {
    const xDiff = Math.abs(endCell.x - startCell.x);
    const yDiff = Math.abs(endCell.y - startCell.y);

    // vertical
    if (xDiff === 0) {
        return true;
    }

    // horizontal
    if (yDiff === 0) {
        return true;
    }

    // diagonal
    return xDiff === yDiff;
}


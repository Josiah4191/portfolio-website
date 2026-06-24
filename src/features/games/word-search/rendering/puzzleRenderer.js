export function drawGrid(context, cellSize, canvasWidth, canvasHeight) {
    if (!cellSize || cellSize <= 0 ) {
        return
    }

    if (canvasWidth <= 0 || canvasHeight <= 0) {
        return
    }

    for (let x = cellSize; x <= canvasWidth; x += cellSize) {
        context.fillStyle = 'lightgray';
        context.fillRect(x, 0, 1, canvasHeight);
    }

    for (let y = cellSize; y <= canvasHeight; y += cellSize) {
        context.fillStyle = 'lightgray';
        context.fillRect(0, y, canvasWidth, 1);
    }
}

export function drawSelectedCells(context, cells, cellSize, color) {
    if (!cells || cells.length === 0) {
        return;
    }

    const startCell = cells[0];
    const endCell = cells[cells.length - 1];

    const startX = startCell.x * cellSize + cellSize / 2;
    const startY = startCell.y * cellSize + cellSize / 2;

    const endX = endCell.x * cellSize + cellSize / 2;
    const endY = endCell.y * cellSize + cellSize / 2;

    context.strokeStyle = color;
    context.lineWidth = cellSize * 0.8;
    context.lineCap = "round";

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

export function drawFoundWords(context, cellSize, foundWords, color) {
    for (const word of foundWords) {
        drawSelectedCells(context, word.cells, cellSize, color);
    }
}

export function drawLetters(context, puzzle, cellSize) {
    if (puzzle) {
        for (let row = 0; row < puzzle.grid.length; row++) {
            for (let col = 0; col < puzzle.grid[row].length; col++) {
                const x = col * cellSize + 1;
                const y = row * cellSize + 1;
                context.fillStyle = '#C7C7C7';
                context.font = '16px Inter';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(puzzle.grid[row][col], x + cellSize / 2, y + cellSize / 2);
            }
        }
    }
}
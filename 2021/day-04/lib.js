const NUMBER_OF_COLUMNS = 5;
const NUMBER_OF_LINES = 5;

export function parseDrawnNumbersAndBoardsFromInput(input) {
  const [rawDrawnNumbers, ...rawBoards] = input.split("\n\n");
  const drawnNumbers = rawDrawnNumbers
    .split(",")
    .map((number) => parseInt(number));
  const boards = rawBoards.map((board) => {
    const lines = board.split("\n").map((line) => {
      return line
        .split(" ")
        .filter((cell) => cell !== "")
        .map((cell) => {
          return { value: parseInt(cell), marked: false };
        });
    });
    return { lines, score: 0 };
  });
  return { drawnNumbers, boards };
}

export function playBingo(drawnNumbers, boards) {
  const winningBoards = [];
  for (let numberIndex = 0; numberIndex < drawnNumbers.length; numberIndex++) {
    const drawnNumber = drawnNumbers[numberIndex];

    for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
      const board = boards[boardIndex];

      if (board.score) {
        continue;
      }

      for (let lineIndex = 0; lineIndex < NUMBER_OF_LINES; lineIndex++) {
        const line = board.lines[lineIndex];

        for (
          let columnIndex = 0;
          columnIndex < NUMBER_OF_COLUMNS;
          columnIndex++
        ) {
          const cell = line[columnIndex];
          if (drawnNumber === cell.value) {
            cell.marked = true;
          }
        }
      }

      if (_boardHasACompleteLine(board) || _boardHasACompleteColumn(board)) {
        board.score = _calculateScore(board, drawnNumber);
        winningBoards.push(board);
      }
    }
  }
  return winningBoards;
}

function _boardHasACompleteLine(board) {
  for (
    let currentLineNumber = 0;
    currentLineNumber < NUMBER_OF_LINES;
    currentLineNumber++
  ) {
    const currentLine = board.lines[currentLineNumber];
    const markedCellsInLine = currentLine.filter((cell) => cell.marked);
    if (markedCellsInLine.length === 5) {
      return true;
    }
  }
  return false;
}

function _boardHasACompleteColumn(board) {
  for (
    let currentColumnNumber = 0;
    currentColumnNumber < NUMBER_OF_COLUMNS;
    currentColumnNumber++
  ) {
    let markedCellsInColumn = 0;
    for (
      let currentLineNumber = 0;
      currentLineNumber < NUMBER_OF_LINES;
      currentLineNumber++
    ) {
      const cell = board.lines[currentLineNumber][currentColumnNumber];
      if (cell.marked) {
        markedCellsInColumn++;
      }
      if (markedCellsInColumn === 5) {
        return true;
      }
    }
  }

  return false;
}

function _calculateScore(board, drawnNumber) {
  const unmarkedCellsSum = board.lines.reduce((total, line) => {
    return line.reduce((total, cell) => {
      if (!cell.marked) {
        total += parseInt(cell.value);
      }
      return total;
    }, total);
  }, 0);
  return unmarkedCellsSum * drawnNumber;
}

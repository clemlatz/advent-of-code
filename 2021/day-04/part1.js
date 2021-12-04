const NUMBER_OF_COLUMNS = 5;
const NUMBER_OF_LINES = 5;

export default function getFirstWinningBoardScore(input) {
  const [drawnNumbers, ...boards] = input.split("\n\n");
  const parsedDrawnNumbers = drawnNumbers.split(",");
  const parsedBoards = boards.map((board) => {
    return board
      .split("\n")
      .map((line) => {
        return line
          .split(" ")
          .filter((cell) => cell !== "")
          .map((cell) => {
            return { value: cell, marked: false }
          });
      });
  });

  for (let numberIndex = 0; numberIndex < parsedDrawnNumbers.length; numberIndex++) {
    const drawnNumber = parsedDrawnNumbers[numberIndex];

    for (let boardIndex = 0; boardIndex < parsedBoards.length; boardIndex++) {
      const board = parsedBoards[boardIndex];

      for (let lineIndex = 0; lineIndex < NUMBER_OF_LINES; lineIndex++) {
        const line = board[lineIndex];

        for (let columnIndex = 0; columnIndex < NUMBER_OF_COLUMNS; columnIndex++) {
          const cell = line[columnIndex];
          if (drawnNumber === cell.value) {
            cell.marked = true;
          }
        }

        if (_lineIsComplete(line)) {
          return _calculateScore(board, drawnNumber);
        }

        if (_boardHasACompleteColumn(board)) {
          return _calculateScore(board, drawnNumber);
        }
      }
    }
  }
}

function _lineIsComplete(line) {
  const markedCells = line.filter((cell) => cell.marked);
  return markedCells.length === 5;
}

function _boardHasACompleteColumn(board) {
  const numberOfLines = board.length;
  const numberOfColumns = board[0].length;
  for (let currentColumnNumber = 0; currentColumnNumber < numberOfColumns; currentColumnNumber++) {
    let markedCellsInColumn = 0;
    for (let currentLineNumber = 0; currentLineNumber < numberOfLines; currentLineNumber++) {
      const cell = board[currentColumnNumber][currentLineNumber];
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
  const unmarkedCellsSum = board.reduce((total, line) => {
    return line.reduce((total, cell) => {
      if (!cell.marked) {
        total += parseInt(cell.value);
      }
      return total;
    }, total);
  }, 0);
  return unmarkedCellsSum * drawnNumber;
}

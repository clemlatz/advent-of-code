const NUMBER_OF_COLUMNS = 5;
const NUMBER_OF_LINES = 5;

export default function getLastWinningBoardScore(input) {
  const [drawnNumbers, ...boards] = input.split("\n\n");
  const parsedDrawnNumbers = drawnNumbers
    .split(",")
    .map((number) => parseInt(number));
  const parsedBoards = boards.map((board) => {
    const lines = board
      .split("\n")
      .map((line) => {
        return line
          .split(" ")
          .filter((cell) => cell !== "")
          .map((cell) => {
            return { value: parseInt(cell), marked: false }
          });
      });
    return { lines, score: 0 };
  });

  const winningBoards = [];

  for (let numberIndex = 0; numberIndex < parsedDrawnNumbers.length; numberIndex++) {
    const drawnNumber = parsedDrawnNumbers[numberIndex];

    for (let boardIndex = 0; boardIndex < parsedBoards.length; boardIndex++) {
      const board = parsedBoards[boardIndex];
      board.index = boardIndex;

      if (board.score > 0) {
        continue;
      }

      for (let lineIndex = 0; lineIndex < NUMBER_OF_LINES; lineIndex++) {
        const line = board.lines[lineIndex];

        for (let columnIndex = 0; columnIndex < NUMBER_OF_COLUMNS; columnIndex++) {
          const cell = line[columnIndex];
          if (drawnNumber === cell.value) {
            cell.marked = true;
          }
        }

        if (_lineIsComplete(line) || _boardHasACompleteColumn(board)) {
          board.score = _calculateScore(board, drawnNumber)
          winningBoards.push(board);
          break;
        }
      }
    }
  }

  return winningBoards[winningBoards.length - 1].score;
}

function _lineIsComplete(line) {
  const markedCells = line.filter((cell) => cell.marked);
  return markedCells.length === 5;
}

function _boardHasACompleteColumn(board) {
  for (let currentColumnNumber = 0; currentColumnNumber < NUMBER_OF_COLUMNS; currentColumnNumber++) {
    let markedCellsInColumn = 0;
    for (let currentLineNumber = 0; currentLineNumber < NUMBER_OF_LINES; currentLineNumber++) {
      const cell = board.lines[currentColumnNumber][currentLineNumber];
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
  return unmarkedCellsSum * parseInt(drawnNumber);
}

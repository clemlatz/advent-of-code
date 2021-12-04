import { parseDrawnNumbersAndBoardsFromInput, playBingo } from "./lib.js";

export default function getLastWinningBoardScore(input) {
  const { drawnNumbers, boards } = parseDrawnNumbersAndBoardsFromInput(input);
  const winningBoards = playBingo(drawnNumbers, boards);
  return winningBoards[winningBoards.length - 1].score;
}

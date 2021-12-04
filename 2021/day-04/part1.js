import { parseDrawnNumbersAndBoardsFromInput, playBingo } from "./lib.js";

export default function getFirstWinningBoardScore(input) {
  const { drawnNumbers, boards } = parseDrawnNumbersAndBoardsFromInput(input);
  const winningBoards = playBingo(drawnNumbers, boards);
  return winningBoards[0].score;
}

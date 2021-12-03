import {
  encodeAnswer,
  getLeastCommonBitForColumn,
  getMostCommonBitForColumn,
  parseBitLinesFromInput,
} from "./lib.js";

export default function calculateLifeSupportRating(input) {
  const bitLines = parseBitLinesFromInput(input);
  const oxygenGeneratorRating = _getOxygenGeneratorRating(bitLines);
  const co2ScrubberRating = _getCo2ScrubberRating(bitLines);
  return encodeAnswer(oxygenGeneratorRating, co2ScrubberRating);
}

function _getOxygenGeneratorRating(bitLines) {
  return _calculateRating(bitLines, getMostCommonBitForColumn);
}

function _getCo2ScrubberRating(bitLines) {
  return _calculateRating(bitLines, getLeastCommonBitForColumn);
}

function _calculateRating(bitLines, bitSelectionFunction) {
  let selectedLines = bitLines;
  const numberOfColumns = bitLines[0].length;
  for (let column = 0; column < numberOfColumns; column++) {
    const bitCriteria = bitSelectionFunction(selectedLines, column);
    selectedLines = _keepOnlyLinesWithBitCriteriaAtColumn(
      selectedLines,
      bitCriteria,
      column
    );
    if (selectedLines.length === 1) {
      return selectedLines[0].join("");
    }
  }
}

function _keepOnlyLinesWithBitCriteriaAtColumn(lines, bitCritera, column) {
  return lines.filter((line) => {
    return line[column] === bitCritera;
  });
}

export default function calculateLifeSupportRating(input) {
  const lines = input.split('\n');
  const data = lines.map((line) => line.split("").map((bit) => parseInt(bit)));
  const columnNumber = data[0].length;

  let selectedLines = data;
  let lastLine;
  for (let i = 0; i < columnNumber; i++) {
    const mostCommonBitForColumn = _getMostCommonBitForColumn(selectedLines, i);
    selectedLines = _keepOnlyLinesWithBitCriteriaAtColumn(selectedLines, mostCommonBitForColumn, i);
    if (selectedLines.length === 1) {
      lastLine = selectedLines[0];
      break;
    }
  }
  const oxygenGeneratorRating = parseInt(lastLine.join(""), 2);

  selectedLines = data;
  for (let i = 0; i < columnNumber; i++) {
    const mostCommonBitForColumn = _getLeastCommonBitForColumn(selectedLines, i);
    selectedLines = _keepOnlyLinesWithBitCriteriaAtColumn(selectedLines, mostCommonBitForColumn, i);
    if (selectedLines.length === 1) {
      lastLine = selectedLines[0];
      break;
    }
  }
  const co2ScrubberRating = parseInt(lastLine.join(""), 2);

  return oxygenGeneratorRating * co2ScrubberRating;
}

function _getMostCommonBitForColumn(data, column) {
  let zeros = 0;
  let ones = 0;
  data.forEach(line => {
    const bit = line[column];
    if (bit === 0) zeros++;
    if (bit === 1) ones++;
  });
  return zeros > ones ? 0 : 1;
}

function _getLeastCommonBitForColumn(data, column) {
  let zeros = 0;
  let ones = 0;
  data.forEach(line => {
    const bit = line[column];
    if (bit === 0) zeros++;
    if (bit === 1) ones++;
  });
  if (zeros === ones) return 0;
  return zeros < ones ? 0 : 1;
}

function _keepOnlyLinesWithBitCriteriaAtColumn(lines, bitCritera, column) {
  return lines.filter((line) => {
    return line[column] === bitCritera;
  });
}

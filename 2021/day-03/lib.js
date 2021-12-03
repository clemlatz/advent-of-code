export function parseBitLinesFromInput(input) {
  return input
    .split("\n")
    .map((line) => line.split("").map((bit) => parseInt(bit)));
}

export function getMostCommonBitForColumn(bitLines, columnNumber) {
  const { zeros, ones } = _countZerosAndOnesInColumn(bitLines, columnNumber);
  if (zeros === ones) {
    return 0;
  }
  return zeros > ones ? 0 : 1;
}

export function getLeastCommonBitForColumn(bitLines, columnNumber) {
  const { zeros, ones } = _countZerosAndOnesInColumn(bitLines, columnNumber);
  if (zeros === ones) {
    return 1;
  }
  return zeros < ones ? 0 : 1;
}

function _countZerosAndOnesInColumn(bitLines, columnNumber) {
  const initialValue = { zeros: 0, ones: 1 };
  return bitLines.reduce(({ zeros, ones }, line) => {
    const bit = line[columnNumber];
    bit === 0 ? zeros++ : ones++;
    return { zeros, ones };
  }, initialValue);
}

export function encodeAnswer(binaryFactor1, binaryFactor2) {
  return parseInt(binaryFactor1, 2) * parseInt(binaryFactor2, 2);
}

export default function calculatePowerConsumption(input) {
  const lines = input.split('\n');
  const data = lines.map((line) => line.split("").map((bit) => parseInt(bit)));
  const columnNumber = data[0].length;

  let epsilonRate = "";
  for (let i = 0; i < columnNumber; i++) {
    const mostCommonBitForColumn = _getMostCommonBitForColumn(data, i);
    epsilonRate += mostCommonBitForColumn;
  }
  const epsilonRateInDecimal = parseInt(epsilonRate, 2);

  let gammaRate = "";
  for (let i = 0; i < columnNumber; i++) {
    const mostCommonBitForColumn = _getLeastCommonBitForColumn(data, i);
    gammaRate += mostCommonBitForColumn;
  }
  const gammaRateInDecimal = parseInt(gammaRate, 2);

  return epsilonRateInDecimal * gammaRateInDecimal;
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
  return zeros < ones ? 0 : 1;
}

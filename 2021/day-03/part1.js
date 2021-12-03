import {
  encodeAnswer,
  getLeastCommonBitForColumn,
  getMostCommonBitForColumn,
  parseBitLinesFromInput,
} from "./lib.js";

export default function calculatePowerConsumption(input) {
  const bitLines = parseBitLinesFromInput(input);
  const epsilonRate = _getEpsilonRate(bitLines);
  const gammaRate = _getGammaRate(bitLines);
  return encodeAnswer(epsilonRate, gammaRate);
}

function _getEpsilonRate(bitLines) {
  return _getRate(bitLines, getMostCommonBitForColumn);
}

function _getGammaRate(bitLines) {
  return _getRate(bitLines, getLeastCommonBitForColumn);
}

function _getRate(bitLines, bitSelectionFunction) {
  const columns = bitLines[0];
  const initialRate = "";
  return columns.reduce((rate, _, columnNumber) => {
    const selectedBit = bitSelectionFunction(bitLines, columnNumber);
    return `${rate}${selectedBit}`;
  }, initialRate);
}

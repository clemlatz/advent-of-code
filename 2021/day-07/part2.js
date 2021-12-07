import {
  calculateRequiredFuelForDestination,
  getAllPossibleDestinations,
  parseCrabsPositionsFromInput
} from "./lib.js";

export default function calculateFuelRequiredForOptimalMove(input) {
  const crabsPositions = parseCrabsPositionsFromInput(input);
  const possibleDestinations = getAllPossibleDestinations(crabsPositions);
  const fuelRequiredPerDestination = possibleDestinations.map((destination) => {
    return calculateRequiredFuelForDestination(
      crabsPositions,
      destination,
      _calculateFuelRequiredForMove
    );
  });

  return Math.min(...fuelRequiredPerDestination);
}

function _calculateFuelRequiredForMove(start, end) {
  const distance = Math.abs(start - end);
  return distance * (distance + 1) / 2;
}

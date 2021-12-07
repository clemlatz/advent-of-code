import {
  calculateRequiredFuelForDestination,
  getAllPossibleDestinations,
  parseCrabsPositionsFromInput,
} from "./lib.js";

const FUEL_PER_MOVE = 1;

export default function calculateFuelRequiredForOptimalDestination(input) {
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
  return distance * FUEL_PER_MOVE;
}

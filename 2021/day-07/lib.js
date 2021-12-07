export function parseCrabsPositionsFromInput(input) {
  return input.split(",").map((position) => parseInt(position));
}

export function getAllPossibleDestinations(crabsPositions) {
  const greatestPosition = Math.max(...crabsPositions);
  return new Array(greatestPosition).fill(undefined).map((_, index) => index);
}

export function calculateRequiredFuelForDestination(
  crabsPositions,
  destination,
  fuelForMoveFunction
) {
  return crabsPositions.reduce((total, crabPosition) => {
    return total + fuelForMoveFunction(crabPosition, destination);
  }, 0);
}


export default function calculateFuelRequiredForOptimalMove(input) {
  const crabs = input.split(',').map(position => parseInt(position));

  const greatestPosition = Math.max(...crabs);
  const fuelRequiredPerPosition = [];
  for (let currentFinalPosition = 0; currentFinalPosition <= greatestPosition; currentFinalPosition++) {
    const fuelRequiredForCurrentPosition = calculateFuelRequiredForPosition(crabs, currentFinalPosition);
    fuelRequiredPerPosition.push(fuelRequiredForCurrentPosition);
  }
  return Math.min(...fuelRequiredPerPosition);
}

function calculateFuelRequiredForPosition(crabs, currentFinalPosition) {
  let movements = 0;
  let fuelRequiredByMove = 0;
  for (let currentCrabIndex = 0; currentCrabIndex < crabs.length; currentCrabIndex++) {
    const currentCrabPosition = crabs[currentCrabIndex];
    const currentCrabMovement = Math.abs(currentCrabPosition - currentFinalPosition);
    fuelRequiredByMove += calculateFuelRequiredForCrabMove(currentCrabMovement);
    movements += currentCrabMovement;
  }
  return fuelRequiredByMove;
}

function calculateFuelRequiredForCrabMove(distance) {
  let fuelRequired = 0;
  for (let currentPosition = 1; currentPosition <= distance; currentPosition++) {
    fuelRequired += currentPosition;
  }
  return fuelRequired;
}

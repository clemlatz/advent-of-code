export default function calculateFuelRequiredForOptimalMove(input) {
  const crabs = input.split(',').map(position => parseInt(position));

  const greatestPosition = Math.max(...crabs);
  const movementsArray = [];
  for(let currentFinalPosition = 0; currentFinalPosition <= greatestPosition; currentFinalPosition++) {
    let movements = 0;
    for(let currentCrabIndex = 0; currentCrabIndex < crabs.length; currentCrabIndex++) {
      const currentCrabPosition = crabs[currentCrabIndex];
      const currentCrabMovement = Math.abs(currentCrabPosition - currentFinalPosition);
      movements += currentCrabMovement;
    }
    movementsArray.push(movements);
  }

  return Math.min(...movementsArray);
}

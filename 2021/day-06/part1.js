export default function calculateFishCountAfterDays(input, days) {
  const fishes = parseFishesFromInput(input);
  const grownFishes = simulateFishGrowth(fishes, days);
  return grownFishes.length;
}

function parseFishesFromInput(input) {
  return input.split(",").map((fish) => parseInt(fish));
}

function simulateFishGrowth(fishesAtStart, days) {
  const fishes = [...fishesAtStart];
  for (let day = 1; day <= days; day++) {
    for (let fishIndex = 0; fishIndex < fishes.length; fishIndex++) {
      let currentFishTimer = fishes[fishIndex];
      currentFishTimer -= 1;
      if (currentFishTimer < 0) {
        currentFishTimer = 6;
        fishes.push(9);
      }
      fishes[fishIndex] = currentFishTimer;
    }
  }

  return fishes;
}

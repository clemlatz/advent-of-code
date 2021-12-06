export default function calculateFishCountAfterDays(input, days) {
  let fishes = input.split(",").map((fish) => parseInt(fish));
  for (let day = 1; day <= days; day++) {
    for (let fishIndex = 0; fishIndex < fishes.length; fishIndex++) {
      let fish = fishes[fishIndex];
      fish -= 1;
      if (fish < 0) {
        fish = 6;
        fishes.push(9);
      }
      fishes[fishIndex] = fish;
    }
  }

  return fishes.length;
}

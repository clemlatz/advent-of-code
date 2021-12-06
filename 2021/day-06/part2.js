export default function calculateFishCountAfterDays(input, days) {
  let fishCountByTimer = _countFishesByTimer(input);

  for (let currentDay = 1; currentDay <= days; currentDay++) {
    const countFor0 = fishCountByTimer[0];
    fishCountByTimer[0] = fishCountByTimer[1];
    fishCountByTimer[1] = fishCountByTimer[2];
    fishCountByTimer[2] = fishCountByTimer[3];
    fishCountByTimer[3] = fishCountByTimer[4];
    fishCountByTimer[4] = fishCountByTimer[5];
    fishCountByTimer[5] = fishCountByTimer[6];
    fishCountByTimer[6] = fishCountByTimer[7] + countFor0;
    fishCountByTimer[7] = fishCountByTimer[8];
    fishCountByTimer[8] = countFor0;
  }

  return fishCountByTimer.reduce((total, count) => total + count, 0);
}

function _countFishesByTimer(input) {
  let fishes = input.split(",").map((fish) => parseInt(fish));
  let fishCountByTimer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let fishIndex = 0; fishIndex < fishes.length; fishIndex++) {
    let fishTimer = fishes[fishIndex];
    fishCountByTimer[fishTimer]++;
  }
  return fishCountByTimer;
}

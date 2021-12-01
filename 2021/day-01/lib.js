export function parseMeasurementsFromInput(input) {
  return input.split("\n").map((input) => parseInt(input));
}

export function keepIncreasingValuesOnly(measurements) {
  return measurements.filter(
    (_, index) => measurements[index] > measurements[index - 1]
  );
}

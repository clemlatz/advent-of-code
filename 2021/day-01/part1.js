import { keepIncreasingValuesOnly, parseMeasurementsFromInput } from "./lib.js";

export default function countMeasurementIncreases(input) {
  const measurements = parseMeasurementsFromInput(input);
  const increasedMeasurements = keepIncreasingValuesOnly(measurements);
  return increasedMeasurements.length;
}

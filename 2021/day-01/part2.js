import { keepIncreasingValuesOnly, parseMeasurementsFromInput } from "./lib.js";

export default function countMeasurementsWindowIncreases(input) {
  const measurements = parseMeasurementsFromInput(input);
  const measurementWindowTotal = _addMeasurementsByThree(measurements);
  const increasedMeasurementsWindow = keepIncreasingValuesOnly(
    measurementWindowTotal
  );
  return increasedMeasurementsWindow.length;
}

function _addMeasurementsByThree(measurements) {
  return measurements.map((_, startIndex) => {
    const depth1 = measurements[startIndex];
    const depth2 = measurements[startIndex + 1];
    const depth3 = measurements[startIndex + 2];

    return depth1 + depth2 + depth3;
  });
}

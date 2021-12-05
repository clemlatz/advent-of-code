import {
  countDangerousPoint,
  drawVentPathsFromLines,
  parseVentLinesFromInput,
} from "./lib.js";

export default function getOverlapingPointsCountWithDiagonals(input) {
  const ventLines = parseVentLinesFromInput(input);
  const ventPaths = drawVentPathsFromLines(ventLines);
  return countDangerousPoint(ventPaths);
}

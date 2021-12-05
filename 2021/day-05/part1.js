import {
  countDangerousPoint,
  drawVentPathsFromLines,
  getLineDirection,
  parseVentLinesFromInput,
  HORIZONTAL,
  VERTICAL,
} from "./lib.js";

export default function getOverlapingPointsCount(input) {
  const ventLines = parseVentLinesFromInput(input);
  const horizontalOrVerticalLines = ventLines.filter(
    _isLineHorizontalOrVertical
  );
  const ventPaths = drawVentPathsFromLines(horizontalOrVerticalLines);
  return countDangerousPoint(ventPaths);
}

function _isLineHorizontalOrVertical(line) {
  const direction = getLineDirection(line);
  return direction === HORIZONTAL || direction === VERTICAL;
}

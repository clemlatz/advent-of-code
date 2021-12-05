const HORIZONTAL = 'horizontal';
const VERTICAL = 'vertical';
const DIAGONAL = 'diagonal';

export default function getOverlapingPointsCount(input) {
  const ventLines = input
    .split("\n")
    .map((rawLine) => {
      return rawLine
        .split(" -> ")
        .map((coords) => coords
          .split(",")
          .map((coord) => parseInt(coord))
        )
    });

  const horizontalOrVerticalLines = ventLines.filter(_isLineHorizontalOrVertical);
  const ventPaths = horizontalOrVerticalLines.map((line) => {
    const [start, end] = line;
    const [startX, startY] = start;
    const [endX, endY] = end;

    if (_getLineDirection(line) === HORIZONTAL) {
      const startPosition = startX < endX ? startX : endX;
      const endPosition = startX > endX ? startX : endX;
      const path = [];
      for (let currentPosition = startPosition; currentPosition <= endPosition; currentPosition++) {
        path.push([currentPosition, startY]);
      }
      return path;
    }

    if (_getLineDirection(line) === VERTICAL) {
      const startPosition = startY < endY ? startY : endY;
      const endPosition = startY > endY ? startY : endY;
      const path = [];
      for (let currentPosition = startPosition; currentPosition <= endPosition; currentPosition++) {
        path.push([startX, currentPosition]);
      }
      return path;
    }

    throw new Error('Unknown direction');
  });

  const positions = ventPaths.flat();
  const positionCount = positions.reduce((counts, position) => {
    const positionIndex = position.join(';');
    counts[positionIndex] = (counts[positionIndex] || 0) + 1;
    return counts;
  }, {});
  const dangerousPoints = Object.entries(positionCount)
    .filter(([_, count]) => count > 1);

  return dangerousPoints.length;
}

function _getLineDirection(line) {
  const [start, end] = line;
  const [startX, startY] = start;
  const [endX, endY] = end;
  if(startX === endX) {
    return VERTICAL;
  } else if (startY === endY) {
    return HORIZONTAL;
  } else {
    return DIAGONAL;
  }
}

function _isLineHorizontalOrVertical(line) {
  const [start, end] = line;
  const [startX, startY] = start;
  const [endX, endY] = end;
  return startX === endX || startY === endY;
}

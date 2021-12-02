import { encodePosition, parseCommandsFromInput } from "./lib";

export default function calculateFinalPosition(input) {
  const commands = parseCommandsFromInput(input);
  const startPosition = { horizontal: 0, depth: 0 };
  const finalPosition = commands.reduce(_calculateNewPosition, startPosition);
  return encodePosition(finalPosition);
}

function _calculateNewPosition({ horizontal, depth }, currentCommand) {
  if (currentCommand.direction === "forward") {
    horizontal += currentCommand.distance;
  }

  if (currentCommand.direction === "up") {
    depth -= currentCommand.distance;
  }

  if (currentCommand.direction === "down") {
    depth += currentCommand.distance;
  }

  return { horizontal, depth };
}

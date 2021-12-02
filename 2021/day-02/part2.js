import { encodePosition, parseCommandsFromInput } from "./lib";

export default function calculateFinalPosition(input) {
  const commands = parseCommandsFromInput(input);
  const startPosition = { horizontal: 0, depth: 0, aim: 0 };
  const finalPosition = commands.reduce(_calculateNewPosition, startPosition);
  return encodePosition(finalPosition);
}

function _calculateNewPosition({ horizontal, depth, aim }, currentCommand) {
  if (currentCommand.direction === "forward") {
    horizontal += currentCommand.distance;
    depth += aim * currentCommand.distance;
  }

  if (currentCommand.direction === "up") {
    aim -= currentCommand.distance;
  }

  if (currentCommand.direction === "down") {
    aim += currentCommand.distance;
  }

  return { horizontal, depth, aim };
}

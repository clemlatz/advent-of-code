export function parseCommandsFromInput(input) {
  const commands = input.split("\n");
  return commands.map((rawCommand) => {
    const [direction, distance] = rawCommand.split(" ");
    return { direction, distance: parseInt(distance) };
  });
}

export function encodePosition({ horizontal, depth }) {
  return horizontal * depth;
}

export default function calculateFinalPositionWithAim(input) {
  const commands = input.split("\n");
  const parsedCommands = commands.map((rawCommand) => {
    return rawCommand.split(" ");
  });

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < parsedCommands.length; i++) {
    const currentCommand = parsedCommands[i];
    const direction = currentCommand[0];
    const distance = parseInt(currentCommand[1]);

    if (direction === "forward") {
      horizontalPosition += distance;
      depth += aim * distance;
    }

    if (direction === "up") {
      aim -= distance;
    }

    if (direction === "down") {
      aim += distance;
    }
  }

  return horizontalPosition * depth;
}

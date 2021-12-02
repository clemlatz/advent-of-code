export default function calculateFinalPosition(input) {
  const commands = input.split("\n");
  const parsedCommands = commands.map(rawCommand => {
    return rawCommand.split(" ");
  })

  let horizontalPosition = 0;
  let verticalPosition = 0;
  for (let i = 0; i < parsedCommands.length; i++) {
    const currentCommand = parsedCommands[i];
    const direction = currentCommand[0];
    const distance = parseInt(currentCommand[1]);

    if (direction === "forward") {
      horizontalPosition += distance;
    }

    if (direction === "up") {
      verticalPosition -= distance;
    }

    if (direction === "down") {
      verticalPosition += distance;
    }
  }

  return verticalPosition * horizontalPosition;
}

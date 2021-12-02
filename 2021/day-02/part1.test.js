import calculateFinalPosition from "./part1";

test("returns correct position for test input", () => {
  // given
  const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

  // when
  const result = calculateFinalPosition(input);

  // then
  expect(result).toBe(150);
});

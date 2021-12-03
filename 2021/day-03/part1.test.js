import calculateFinalPosition from "./part1";

test("returns correct consumption for test input", () => {
  // given
  const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

  // when
  const result = calculateFinalPosition(input);

  // then
  expect(result).toBe(198);
});

import calculateLifeSupportRating from "./part2";

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
  const result = calculateLifeSupportRating(input);

  // then
  expect(result).toBe(230);
});

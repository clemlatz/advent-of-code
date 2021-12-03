import part1 from "./part1";
import part2 from "./part2";

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

describe("Day 03", () => {
  test("returns correct answer for part 1 test input", () => {
    // when
    const result = part1(input);

    // then
    expect(result).toBe(198);
  });

  test("returns correct answer for part 2 test input", () => {
    // when
    const result = part2(input);

    // then
    expect(result).toBe(230);
  });
});

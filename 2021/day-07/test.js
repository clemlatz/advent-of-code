import part1 from "./part1";
import part2 from "./part2";

const input = `16,1,2,0,4,2,7,1,2,14`;

describe("Day 07", () => {
  test("part 1", () => {
    // when
    const result = part1(input);

    // then
    expect(result).toBe(37);
  });

  test("part 2", () => {
    // when
    const result = part2(input);

    // then
    expect(result).toBe(168);
  });
});

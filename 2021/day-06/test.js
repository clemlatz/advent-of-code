import part1 from "./part1";
import part2 from "./part2";

const input = `3,4,3,1,2`;

describe("Day 06", () => {
  describe("part 1", () => {
    test("returns correct fish count for 26 days", () => {
      // when
      const result = part1(input, 18);

      // then
      expect(result).toBe(26);
    });

    test("returns correct fish count for 80 days", () => {
      // when
      const result = part1(input, 80);

      // then
      expect(result).toBe(5934);
    });
  });

  describe("part 2", () => {
    test("returns correct fish count for 26 days", () => {
      // when
      const result = part2(input, 18);

      // then
      expect(result).toBe(26);
    });

    test("returns correct fish count for 80 days", () => {
      // when
      const result = part2(input, 80);

      // then
      expect(result).toBe(5934);
    });

    test("returns correct fish count for 26 days", () => {
      // when
      const result = part2(input, 256);

      // then
      expect(result).toBe(26984457539);
    });
  });
});

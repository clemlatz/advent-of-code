import countMeasurementsWindowIncreases from "./part2";

test("returns correct count for test input", () => {
  // given
  const input = `199
  200
  208
  210
  200
  207
  240
  269
  260
  263`;

  // when
  const result = countMeasurementsWindowIncreases(input);

  // then
  expect(result).toBe(5);
});

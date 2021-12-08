// 1, 4, 7, or 8
const ONE = "cf".length;
const FOUR = "bcdf".length;
const SEVEN = "acf".length;
const EIGHT = "abcdefg".length;

export default function calculateDigits(input) {
  const outputs = input
    .split("\n")
    .map((line) => {
      const [, output] = line.split(" | ");
      return output
        .split(" ")
        .map((digit) => digit.length);
    }).flat();

  return outputs.reduce((total, current) => {
    if ([ONE, FOUR, SEVEN, EIGHT].includes(current)) {
      total++;
    }
    return total;
  }, 0);
}

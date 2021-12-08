const EIGHT = "acedgfb";
const FIVE = "cdfbe";
const TWO = "gcdfa";
const THREE = "fbcad";
const SEVEN = "dab";
const NINE = "cefabd";
const SIX = "cdfgeb";
const FOUR = "eafb";
const ZERO = "cagedb";
const ONE = "ab";

//  AAAA
// B    C
// B    C
//  DDDD
// E    F
// E    F
//  GGGG

export default function calculateDigits(input) {
  const lines = input
    .split("\n")
    .map((line) => {
      const [rawInput, rawOutput] = line.split(" | ");
      const input = rawInput.split(" ");
      const output = rawOutput.split(" ");
      return { output, input };
    });

  const decodedOutputs = lines.map(({ input, output }) => {
    const onePattern = findPatternForDigit(input, ONE);
    const fourPattern = findPatternForDigit(input, FOUR);
    const sevenPattern = findPatternForDigit(input, SEVEN);
    const eightPattern = findPatternForDigit(input, EIGHT);

    const positionA = sevenPattern[0];
    const positionB = fourPattern[0];
    const positionC = fourPattern[1];
    const positionD = fourPattern[2];
    const positionE = eightPattern[4];
    const positionF = onePattern[1];
    const positionG = eightPattern[1];

    const zeroPattern = positionA + positionB + positionC + positionE + positionF + positionG;
    const twoPattern = positionA + positionC + positionD + positionE + positionG;
    const threePattern = positionA + positionC + positionD + positionF + positionG;
    const fivePattern = positionA + positionB + positionD + positionF + positionG;
    const sixPattern = positionA + positionB + positionD + positionE + positionF + positionG;
    const ninePattern = positionA + positionB + positionC + positionD + positionF + positionG;

    const patterns = [
      { matcher: sortAlphabetically(zeroPattern), value: 0 },
      { matcher: sortAlphabetically(onePattern), value: 1 },
      { matcher: sortAlphabetically(twoPattern), value: 2 },
      { matcher: sortAlphabetically(threePattern), value: 3 },
      { matcher: sortAlphabetically(fourPattern), value: 4 },
      { matcher: sortAlphabetically(fivePattern), value: 5 },
      { matcher: sortAlphabetically(sixPattern), value: 6 },
      { matcher: sortAlphabetically(sevenPattern), value: 7 },
      { matcher: sortAlphabetically(eightPattern), value: 8 },
      { matcher: sortAlphabetically(ninePattern), value: 9 }
    ];

    const decodedOutput = decodeLettersToDigit(output, patterns);

    return parseInt(decodedOutput.join(""));
  });

  return decodedOutputs.reduce((total, output) => {
    return total + output;
  }, 0);
}

function findPatternForDigit(input, targetDigit) {
  return input.find((digit) => digit.length === targetDigit.length);
}

function sortAlphabetically(text) {
  return text.split("").sort().join("");
};

function decodeLettersToDigit(input, patterns) {
  const decodedInput = input.map((letterDigit) => {
    const sortedLetters = sortAlphabetically(letterDigit);
    const matchingPattern = patterns.find(
      ({ matcher }) => sortedLetters === matcher
    );
    if (typeof matchingPattern === "undefined") {
      throw new Error(`Unrecognized pattern ${letterDigit}`);
    }
    return matchingPattern.value;
  });
  return decodedInput;
}

function convert(number) {
  if (typeof number !== "number") {
    throw new Error(`non-numeric input: ${number}`);
  } else if (number < 0) {
    throw new Error(`number out of range: ${number}`);
  } else if (number < 20) {
    return words[number];
  } else if (number < 100) {
    return compound(number, 10, "-", (n) => tensWords[n]);
  } else if (number < 1_000) {
    return compound(number, 100, " and ", (n) => `${convert(n)} hundred`);
  } else if (number < 1_000_000) {
    return compound(number, 1_000, ", ", (n) => `${convert(n)} thousand`);
  } else if (number < 1_000_000_000) {
    return compound(number, 1_000_000, ", ", (n) => `${convert(n)} million`);
  } else {
    throw new Error(`number out of range: ${number}`);
  }
}

function compound(number, divisor, combiner, formatter) {
  const start = Math.floor(number / divisor);
  const remainder = number - (divisor * start);
  const startWord = formatter(start);
  return remainder
    ? `${startWord}${combiner}${convert(remainder)}`
    : startWord;
}

const words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tensWords = [
  null,
  null,
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

module.exports.convert = convert;

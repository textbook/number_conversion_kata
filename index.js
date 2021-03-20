function convert(number) {
  if (number < 0 || number > 999_999_999) {
    throw new Error(`number out of range: ${number}`);
  }
  if (number > 999_999) {
    return compound(number, 1_000_000, ", ", (n) => `${convert(n)} million`);
  }
  if (number > 999) {
    return compound(number, 1_000, ", ", (n) => `${convert(n)} thousand`);
  }
  if (number > 99) {
    return compound(number, 100, " and ", (n) => `${convert(n)} hundred`);
  }
  if (number > 19) {
    return compound(number, 10, "-", (n) => tensWords[n]);
  }
  return words[number];
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

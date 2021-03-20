function convert(number) {
  if (number > 99) {
    const hundreds = Math.floor(number / 100);
    const remainder = number - (100 * hundreds);
    return remainder
      ? `${convert(hundreds)} hundred and ${convert(remainder)}`
      : `${convert(hundreds)} hundred`;
  }
  if (number > 19) {
    const tens = Math.floor(number / 10);
    const units = number - (10 * tens);
    return units
      ? `${tensWords[tens]}-${convert(units)}`
      : tensWords[tens];
  }
  return words[number];
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

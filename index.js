function convert(number) {
  return number
    ? (number > 1 ? "two" : "one")
    : "zero";
}

module.exports.convert = convert;

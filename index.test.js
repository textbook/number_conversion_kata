const { expect } = require("chai");

const { convert } = require(".");

describe("number conversion", () => {
  describe("for numbers 0 to 19", () => {
    [
      [0, "zero"],
      [1, "one"],
      [2, "two"],
      [3, "three"],
      [4, "four"],
      [5, "five"],
      [6, "six"],
      [7, "seven"],
      [8, "eight"],
      [9, "nine"],
      [10, "ten"],
      [11, "eleven"],
      [12, "twelve"],
      [13, "thirteen"],
      [14, "fourteen"],
      [15, "fifteen"],
      [16, "sixteen"],
      [17, "seventeen"],
      [18, "eighteen"],
      [19, "nineteen"],
    ].forEach(([input, output]) => {
      it(`converts ${input} to '${output}'`, () => {
        expect(convert(input)).to.equal(output);
      });
    });
  });

  describe("for numbers 20 to 99", () => {
    [
      [2, "twenty"],
      [3, "thirty"],
      [4, "forty"],
      [5, "fifty"],
      [6, "sixty"],
      [7, "seventy"],
      [8, "eighty"],
      [9, "ninety"],
    ].forEach(([tens, tensWord]) => {
      const number = tens * 10;
      const word = tensWord;
      it(`converts ${number} to '${word}'`, () => {
        expect(convert(number)).to.equal(word);
      });

      [
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
      ].forEach(([units, unitsWord]) => {
        const number = (tens * 10) + units;
        const word = `${tensWord}-${unitsWord}`;
        it(`converts ${number} to '${word}'`, () => {
          expect(convert(number)).to.equal(word);
        });
      });
    });
  });

  describe("for numbers 100 to 999", () => {
    [
      [123, "one hundred and twenty-three"],
      [300, "three hundred"],
      [420, "four hundred and twenty"],
      [567, "five hundred and sixty-seven"],
      [700, "seven hundred"],
      [911, "nine hundred and eleven"],
    ].forEach(([number, word]) => {
      it(`converts ${number} to '${word}'`, () => {
        expect(convert(number)).to.eq(word);
      });
    });
  });

  describe("for numbers 1,000 to 999,999", () => {
    [
      [1_000, "one thousand"],
      [10_000, "ten thousand"],
      [12_345, "twelve thousand, three hundred and forty-five"],
      [123_456, "one hundred and twenty-three thousand, four hundred and fifty-six"],
    ].forEach(([number, word]) => {
      it(`converts ${number} to '${word}'`, () => {
        expect(convert(number)).to.eq(word);
      });
    });
  });
});

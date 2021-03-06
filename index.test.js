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
      [100, "one hundred"],
      [101, "one hundred and one"],
      [123, "one hundred and twenty-three"],
      [300, "three hundred"],
      [420, "four hundred and twenty"],
      [567, "five hundred and sixty-seven"],
      [700, "seven hundred"],
      [911, "nine hundred and eleven"],
      [998, "nine hundred and ninety-eight"],
      [999, "nine hundred and ninety-nine"],
    ].forEach(([number, word]) => {
      it(`converts ${number} to '${word}'`, () => {
        expect(convert(number)).to.equal(word);
      });
    });
  });

  describe("for numbers 1,000 to 999,999", () => {
    [
      [1_000, "one thousand"],
      [1_001, "one thousand and one"],
      [10_000, "ten thousand"],
      [12_345, "twelve thousand, three hundred and forty-five"],
      [123_456, "one hundred and twenty-three thousand, four hundred and fifty-six"],
      [999_998, "nine hundred and ninety-nine thousand, nine hundred and ninety-eight"],
      [999_999, "nine hundred and ninety-nine thousand, nine hundred and ninety-nine"],
    ].forEach(([number, word]) => {
      it(`converts ${number} to '${word}'`, () => {
        expect(convert(number)).to.equal(word);
      });
    });
  });

  describe("for numbers 1,000,000 to 999,999,999", () => {
    [
      [1_000_000, "one million"],
      [1_000_001, "one million and one"],
      [1_234_567, "one million, two hundred and thirty-four thousand, five hundred and sixty-seven"],
      [12_345_678, "twelve million, three hundred and forty-five thousand, six hundred and seventy-eight"],
      [123_456_789, "one hundred and twenty-three million, four hundred and fifty-six thousand, seven hundred and eighty-nine"],
      [999_999_998, "nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-eight"],
      [999_999_999, "nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine"],
    ].forEach(([number, word]) => {
      it(`converts ${number} to '${word}'`, () => {
        expect(convert(number)).to.equal(word);
      });
    });
  });

  describe("for numbers out of range", () => {
    [
      -2,
      -1,
      1_000_000_000,
      1_000_000_001,
    ].forEach((number) => {
      it(`throws an error for ${number}`, () => {
        expect(() => convert(number)).to.throw(`number out of range: ${number}`);
      });
    });
  });

  describe("for non-numeric input", () => {
    [
      "foo",
      "123",
      [],
      {},
      new Date(),
    ].forEach((thing) => {
      it(`throws an error for ${thing}`, () => {
        expect(() => convert(thing)).to.throw(`non-numeric input: ${thing}`);
      });
    })
  });
});

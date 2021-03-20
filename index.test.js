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
});

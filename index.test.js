const { expect } = require("chai");

const { convert } = require(".");

describe("number conversion", () => {
  [
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ].forEach(([input, output]) => {
    it(`converts ${input} to '${output}'`, () => {
      expect(convert(input)).to.equal(output);
    });
  });
});

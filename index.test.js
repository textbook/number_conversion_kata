const { expect } = require("chai");

const { convert } = require(".");

describe("number conversion", () => {
  it("converts 0 to 'zero'", () => {
    expect(convert(0)).to.equal("zero");
  });
});

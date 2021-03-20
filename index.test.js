const { expect } = require("chai");

const { convert } = require(".");

describe("number conversion", () => {
  it("converts 0 to 'zero'", () => {
    expect(convert(0)).to.equal("zero");
  });

  it("converts 1 to 'one'", () => {
    expect(convert(1)).to.equal("one");
  });

  it("converts 2 to 'two'", () => {
    expect(convert(2)).to.equal("two");
  });

  it("converts 3 to 'three'", () => {
    expect(convert(3)).to.equal("three");
  });
});

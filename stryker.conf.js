/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  coverageAnalysis: "perTest",
  mochaOptions: {
    spec: ["*.test.js"],
  },
  mutate: ["index.js"],
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "mocha",
};

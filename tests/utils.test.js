// tests/utils.test.js

const { getSimilarityScore } = require("../src/utils/similarity");

describe("Utils Module - Similarity", () => {
  test("Calculates similarity between two identical strings", () => {
    const result = getSimilarityScore("error", "error");
    expect(result).toBe(1);
  });

  test("Calculates similarity between two different strings", () => {
    const result = getSimilarityScore("error", "warning");
    expect(result).toBeLessThan(1);
    expect(result).toBeGreaterThan(0);
  });
});

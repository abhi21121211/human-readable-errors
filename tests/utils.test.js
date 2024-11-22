// tests/utils.test.js

const { calculateSimilarity } = require("../src/utils/similarity");

describe("Utils Module - Similarity", () => {
  test("Calculates similarity between two identical strings", () => {
    const result = calculateSimilarity("error", "error");
    expect(result).toBe(1);
  });

  test("Calculates similarity between two different strings", () => {
    const result = calculateSimilarity("error", "warning");
    expect(result).toBeLessThan(1);
    expect(result).toBeGreaterThan(0);
  });
});

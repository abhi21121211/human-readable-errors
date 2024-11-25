// tests/utils.test.js

import { getSimilarityScore } from "../src/utils/similarity.js";

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

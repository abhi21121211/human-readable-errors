import { getSimilarityScore } from "../src/utils/similarity";

describe("String Similarity", () => {
  test("should calculate exact similarity for identical error descriptions", () => {
    const score = getSimilarityScore(
      "TypeError: Cannot read property of undefined",
      "TypeError: Cannot read property of undefined"
    );
    expect(score).toBe(1.1);
  });

  test("should calculate similarity for slightly different error descriptions", () => {
    const score = getSimilarityScore(
      "TypeError: Cannot read property of undefined",
      "TypeError: Cannot read property of null"
    );
    expect(score).toBeGreaterThan(0.8);
  });

  test("should return low similarity for unrelated error descriptions", () => {
    const score = getSimilarityScore(
      "TypeError: Cannot read property of undefined",
      "ReferenceError: foo is not defined"
    );
    expect(score).toBeLessThan(0.5);
  });

  test("should handle empty strings gracefully", () => {
    const score = getSimilarityScore("", "");
    expect(score).toBe(0);
  });
});

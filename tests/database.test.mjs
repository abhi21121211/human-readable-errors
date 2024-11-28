import { getErrorSolution, loadErrorMappings } from "../src/database/index.js";

describe("Error Mappings", () => {
  test("should load error mappings correctly for JavaScript and React", async () => {
    const mappings = await loadErrorMappings("javascript", "react");
    expect(mappings).toHaveProperty("TypeError");
    expect(mappings).toHaveProperty("ReferenceError");
  });

  test("should return error solution for an exact match", async () => {
    const solution = await getErrorSolution(
      "javascript",
      "react",
      "TypeError: Cannot read property of undefined"
    );
    expect(solution).toBe(
      "Check if the object is properly initialized before accessing properties."
    );
  });

  test("should return a fuzzy match solution when exact match is not found", async () => {
    const solution = await getErrorSolution(
      "javascript",
      "react",
      "TypeError: Undefined is not a function"
    );
    expect(solution).toBe(
      "Ensure the function is properly defined before calling."
    );
    expect(solution.similarityScore).toBeGreaterThan(0.7);
  });

  test("should return fallback solution when no match is found", async () => {
    const solution = await getErrorSolution(
      "python",
      "django",
      "KeyError: foo"
    );
    expect(solution).toBe(
      "Please check if the key exists before attempting to access it."
    );
    expect(solution.suggestion).toBeDefined();
  });

  test("should handle malformed error mappings gracefully", async () => {
    const solution = await getErrorSolution(
      "javascript",
      "react",
      "Invalid error"
    );
    expect(solution).toBe(
      "No solution found. Please check the error description."
    );
  });
});

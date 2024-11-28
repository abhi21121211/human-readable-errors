import { getErrorSolution } from "../src/database/index.js";

describe("Fallback Error Solutions", () => {
  test("should return fallback solution for an unknown error", async () => {
    const solution = await getErrorSolution(
      "javascript",
      "react",
      "UnknownError: Something went wrong"
    );
    expect(solution).toBe(
      "No solution found. Please check the error description."
    );
    expect(solution.suggestion).toBeDefined();
  });

  test("should suggest general debugging tips for unknown errors", async () => {
    const solution = await getErrorSolution("python", "flask", "UnknownError");
    expect(solution.suggestion).toContain(
      "Check if the error is coming from a known library or framework."
    );
  });
});

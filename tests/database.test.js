const { getErrorSolution } = require("../src/database");

describe("Error Solution Fetcher", () => {
  test("returns fallback response for an unknown error", () => {
    const stackTrace = "UnknownError: Something went wrong!";
    const result = getErrorSolution(stackTrace);

    expect(result).toEqual({
      type: "Unknown",
      description: "An unrecognized error occurred.",
      solution: "Please refer to official documentation or debug further.",
      cause: "Unknown error type.",
    });
  });

  test("returns a close match for a similar error", () => {
    const stackTrace = "ReferenceError: foo is not defined";

    const result = getErrorSolution(stackTrace);

    expect(result).toHaveProperty("type", "JavaScript");
    expect(result.solution).toMatch(
      /Declare the variable or function before using it/
    );
  });
});

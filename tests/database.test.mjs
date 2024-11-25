import { getErrorSolution } from "../src/database/index.js";

describe("Database Module", () => {
  test("should fetch the correct solution for a known error code", () => {
    const errorCode = "ERR_UNKNOWN";
    const result = getErrorSolution(errorCode);
    expect(result.solution).toBe(
      "Refer to the documentation for unknown errors."
    );
    expect(result.type).toBe("Unknown");
  });

  test("should return a default object for an unknown error code", () => {
    const errorCode = "NON_EXISTENT_ERROR";
    const result = getErrorSolution(errorCode);
    expect(result.solution).toBe(
      "Refer to the documentation for unknown errors."
    );
  });
});

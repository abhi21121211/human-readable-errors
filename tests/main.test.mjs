// Import the function(s) to test
import { handleError } from "../src/main.js";

describe("handleError", () => {
  beforeAll(() => {
    // Mock console.warn to suppress warnings during tests
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore console.warn after tests
    console.warn.mockRestore();
  });

  test("should return parsed error with a solution for known errors", async () => {
    const errorString = "Mock error string";
    const expectedResult = {
      type: "MockError",
      description: "Mock description",
      solution: "Sample solution",
    };

    const result = await handleError(errorString);

    expect(result).toEqual(expectedResult);
  });

  test("should return UnknownError type for unknown errors", async () => {
    const errorString = "Unknown error string";
    const result = await handleError(errorString);

    expect(result.type).toBe("UnknownError");
    expect(result.description).toBe("An unknown error occurred.");
    expect(result.solution).toBe(
      "Please check the error string or refer to the documentation."
    );
  });

  test("should handle empty error string gracefully", async () => {
    const errorString = "";
    const result = await handleError(errorString);

    expect(result.type).toBe("UnknownError");
    expect(result.description).toBe("An unknown error occurred.");
    expect(result.solution).toBe(
      "Please check the error string or refer to the documentation."
    );
  });

  test("should handle null error input", async () => {
    const result = await handleError(null);

    expect(result.type).toBe("UnknownError");
    expect(result.description).toBe("An unknown error occurred.");
    expect(result.solution).toBe(
      "Please check the error string or refer to the documentation."
    );
  });

  test("should return a warning for unknown error types", async () => {
    const errorString = "Some unrecognized error format";

    const result = await handleError(errorString);

    expect(console.warn).toHaveBeenCalledWith(
      "Warning: Unknown error type detected. Please check the input error string."
    );
    expect(result.type).toBe("UnknownError");
  });
});

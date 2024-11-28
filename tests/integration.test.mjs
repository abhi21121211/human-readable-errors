import { getErrorSolution } from "../src/database";
import { parseStackTrace } from "../src/parsers/stackTraceParser";

describe("Full Error Handling Flow", () => {
  test("should handle a full error description from stack trace to solution", async () => {
    const stack = `TypeError: Cannot read property 'foo' of undefined at Object.<anonymous> (/path/to/file.js:10:15)`;
    const parsedError = parseStackTrace(stack);
    expect(parsedError).toBe(
      "TypeError: Cannot read property 'foo' of undefined"
    );

    const solution = await getErrorSolution("javascript", "react", parsedError);
    expect(solution).toBe(
      "Check if the object is properly initialized before accessing properties."
    );
  });
});

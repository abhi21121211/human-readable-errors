import { parseStackTrace } from "../src/parsers/stackTraceParser";

describe("Stack Trace Parsing", () => {
  test("should correctly parse a valid TypeError stack trace", () => {
    const stack = `TypeError: Cannot read property 'foo' of undefined at Object.<anonymous> (/path/to/file.js:10:15)`;
    const result = parseStackTrace(stack);
    expect(result).toBe("TypeError: Cannot read property 'foo' of undefined");
  });

  test("should handle an incomplete stack trace", () => {
    const stack = `TypeError: Cannot read property 'foo' of undefined`;
    const result = parseStackTrace(stack);
    expect(result).toBe("TypeError: Cannot read property 'foo' of undefined");
  });

  test("should return null for invalid stack trace", () => {
    const stack = `Invalid stack trace`;
    const result = parseStackTrace(stack);
    expect(result).toBeNull();
  });
});

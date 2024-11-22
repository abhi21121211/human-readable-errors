// tests/parsers.test.js

const { parseStackTrace } = require("../src/parsers/stackTraceParser");

describe("StackTraceParser", () => {
  test("Extracts error message from a stack trace", () => {
    const stackTrace = `
      TypeError: Cannot read property 'x' of undefined
          at Object.<anonymous> (/path/to/file.js:10:15)
          at Module._compile (internal/modules/cjs/loader.js:776:30)
    `;
    const result = parseStackTrace(stackTrace);
    expect(result).toBe("TypeError: Cannot read property 'x' of undefined");
  });

  test("Returns null for invalid stack trace input", () => {
    const result = parseStackTrace(null);
    expect(result).toBeNull();
  });

  test("Handles stack traces without recognizable errors", () => {
    const stackTrace = `
      at Object.<anonymous> (/path/to/file.js:10:15)
      at Module._compile (internal/modules/cjs/loader.js:776:30)
    `;
    const result = parseStackTrace(stackTrace);
    expect(result).toBeNull();
  });
});

const detectErrorSource = require("../src/utils/sourceDetector");

describe("Error Source Detection", () => {
  test("Detects JavaScript error source", () => {
    expect(
      detectErrorSource("TypeError: Cannot read property 'x' of undefined")
    ).toBe("JavaScript");
  });

  test("Detects Python error source", () => {
    expect(
      detectErrorSource("Traceback (most recent call last): IndentationError")
    ).toBe("Python");
  });

  test("Detects Angular error source", () => {
    expect(detectErrorSource("ZoneAwareError: ErrorInjector")).toBe("Angular");
  });

  test("Detects Go error source", () => {
    expect(detectErrorSource("panic: runtime error")).toBe("Go");
  });

  test("Returns Unknown for unrecognized error source", () => {
    expect(detectErrorSource("Some random error message")).toBe("Unknown");
  });
});

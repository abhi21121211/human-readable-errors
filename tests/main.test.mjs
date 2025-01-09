// tests/main.test.mjs

import { handleError } from "../src/main.js";

// Test suite
describe("handleError Function", () => {
  test("should return correct error code and solution for a TypeError", async () => {
    const errorString = "TypeError: Cannot read property 'length' of undefined";

    const result = await handleError(errorString);
    expect(result.code).toBe("JS004");
    expect(result.solution).toBeTruthy(); // Ensure the solution is not empty
  });
});

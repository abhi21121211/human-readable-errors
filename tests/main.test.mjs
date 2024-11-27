import { handleError } from "../src/main.js";
import assert from "assert";

// Test case
const errorString = "TypeError: Cannot read property 'length' of undefined";
const language = "javascript";
const framework = "node";

const result = handleError(errorString, language, framework);

assert.strictEqual(result.type, "TypeError", "Error type mismatch.");
assert.ok(result.solution, "Solution should not be empty.");
console.log("Test passed!");

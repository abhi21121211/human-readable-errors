import { handleError, handlePrettyError } from "../src/main.js";

const errorString = `TypeError: Expected an assignment or function call.
    at Object.<anonymous> (/path/to/file.js:10:15)`;

// Add a known error string for testing
const knownErrorString = "ReferenceError: x is not defined";

// Example tests
(async () => {
  console.log("Running test cases for handleError and handlePrettyError...");

  try {
    console.log("Test Case 1: Testing handleError with a known error string");
    let result1 = await handleError(knownErrorString);
    console.log("Result 1:", result1);

    console.log("Test Case 2: Testing handleError with a generic error string");
    let result2 = await handleError(errorString);
    console.log("Result 2:", result2);

    console.log(
      "Test Case 3: Testing handlePrettyError with a known error string"
    );
    let result3 = await handlePrettyError(knownErrorString);
    console.log("Result 3:", result3);

    console.log(
      "Test Case 4: Testing handlePrettyError with a generic error string"
    );
    let result4 = await handlePrettyError(errorString);
    console.log("Result 4:", result4);

    console.log("Test Case 5: Testing handleError with an empty string");
    let result5 = await handleError("");
    console.log("Result 5:", result5);

    console.log("Test Case 6: Testing handlePrettyError with null input");
    let result6 = await handlePrettyError(null);
    console.log("Result 6:", result6);

    console.log(
      "Test Case 7: Testing handleError with an unexpected error format"
    );
    let result7 = await handleError("Some random text");
    console.log("Result 7:", result7);

    console.log(
      "Test Case 8: Testing handlePrettyError with an unexpected error format"
    );
    let result8 = await handlePrettyError("Some random text");
    console.log("Result 8:", result8);
  } catch (error) {
    console.error("An error occurred during the test execution:", error);
  }
})();

import { parseError } from "./parsers/index.js";
import { getErrorSolution } from "./database/index.js";
import { prettyPrintError } from "./utils/format.js";
import { parseStackTrace } from "./parsers/stackTraceParser.js";
import detectErrorSource from "./utils/sourceDetector.js";

/**
 * Handles an error and provides a human-readable solution.
 * @param {string} errorString - The error message or stack trace.
 * @param {string} [environment] - The environment (e.g., 'node', 'react'). If not provided, it will be detected.
 * @param {boolean} pretty - Whether to format the output prettily.
 * @returns {object|string} - Human-readable error solution or formatted output.
 */
function handleError(errorString, environment = "node", pretty = false) {
  // Step 1: Detect the source of the error if the environment is not explicitly provided
  const detectedEnvironment = environment || detectErrorSource(errorString);
  console.log(`[DEBUG] Detected Environment: ${detectedEnvironment}`);

  // Step 2: Parse the stack trace (if present) to extract relevant details
  const parsedStack = parseStackTrace(errorString);
  console.log(`[DEBUG] Parsed Stack Trace:`, parsedStack);

  // Step 3: Parse the error using the detected environment and stack trace (if available)
  const parsedError = parseError(
    parsedStack?.message || errorString,
    detectedEnvironment
  );
  console.log(`[DEBUG] Parsed Error:`, parsedError);

  // Step 4: Fetch a human-readable solution based on error type and description
  const solution = getErrorSolution(parsedError.type, parsedError.description);
  console.log(`[DEBUG] Fetched Solution:`, solution);

  // Step 5: Construct the result object with all relevant details
  const result = {
    type: parsedError.type || "UnknownError",
    description: parsedError.description || "No description provided.",
    file: parsedError.file || null,
    lineNumber: parsedError.lineNumber || null,
    columnNumber: parsedError.columnNumber || null,
    environment: detectedEnvironment,
    cause: solution.cause,
    solution: solution.solution,
    suggestions: solution.suggestions || [],
    matchScore: solution.matchScore || "N/A",
    stackTrace: parsedStack?.stackTrace || "No stack trace provided.",
  };

  // Step 6: Return the result, prettified if requested
  return pretty ? prettyPrintError(result) : result;
}

export { handleError };

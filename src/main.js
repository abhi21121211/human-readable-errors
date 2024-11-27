import { parseError } from "./parsers/index.js";
import { getErrorSolution } from "./database/index.js";
import { prettyPrintError } from "./utils/format.js";
import { parseStackTrace } from "./parsers/stackTraceParser.js";
import detectErrorSource from "./utils/sourceDetector.js";

/**
 * Handles an error and provides a human-readable solution.
 * @param {string} errorString - The error message or stack trace.
 * @param {string} language - The programming language (e.g., "javascript").
 * @param {string} environment - The framework/environment (e.g., 'node', 'react').
 * @param {boolean} pretty - Whether to format the output prettily.
 * @returns {object|string} - Human-readable error solution or formatted output.
 */
function handleError(
  errorString,
  language = "javascript",
  framework = "node",
  pretty = false
) {
  // console.log(errorString, "fffffffffffff errorString");

  const detectedEnvironment = `${language}/${framework}`;
  // console.log(detectedEnvironment, "ffffffffffffff language");

  const parsedStack = parseStackTrace(errorString);
  // console.log(parsedStack, "ffffffff parsedStack");

  const parsedError = parseError(errorString, detectedEnvironment);
  // console.log(parsedError, "ffffffff parsedError");

  if (parsedError.type === "UnknownError") {
    console.warn(
      "Warning: Unknown error type detected. Please check the input error string."
    );
  }
  const solution = getErrorSolution(
    language,
    framework,
    parsedError.description,
    parsedError.type
  );
  // console.log(solution, "ffffffff solution");

  const result = {
    ...parsedError,
    ...solution,
    environment: detectedEnvironment,

    matchScore: solution.matchScore || "N/A",
    stackTrace: parsedStack?.stackTrace || "No stack trace provided.",
  };

  return pretty ? prettyPrintError(result) : result;
}

export { handleError };

import { parseError } from "./parsers/index.js";
import { getErrorSolution } from "./database/index.js";
import { prettyPrintError } from "./utils/format.js";

/**
 * Handles an error and provides a human-readable solution.
 * @param {string} errorString - The error message or stack trace.
 * @param {string} environment - The environment (e.g., 'node', 'react').
 * @param {boolean} pretty - Whether to format the output prettily.
 * @returns {object|string} - Human-readable error solution or formatted output.
 */
function handleError(errorString, environment = "node", pretty = false) {
  const parsedError = parseError(errorString, environment);
  const solution = getErrorSolution(parsedError.type, parsedError.description);

  const result = {
    ...parsedError,
    cause: solution.cause,
    solution: solution.solution,
    suggestions: solution.suggestions || [],
    matchScore: solution.matchScore || "N/A",
  };

  return pretty ? prettyPrintError(result) : result;
}

export { handleError };

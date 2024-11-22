const errorMappings = require("./errorMappings.json"); // Fix for errorMappings
const { parseStackTrace } = require("../parsers");
const detectErrorSource = require("../utils/sourceDetector");

/**
 * Fetches a solution for a given error input.
 * Automatically detects the error source and integrates stack trace parsing.
 * @param {string} errorInput - The error message or stack trace.
 * @returns {Object} - Object containing type, description, cause, and solution.
 */
function getErrorSolution(errorInput) {
  // Parse stack trace to extract the error message (if applicable)
  const parsedError = parseStackTrace(errorInput);

  // Use the parsed error or fallback to the input
  const errorKey = parsedError || errorInput.trim();

  // Detect the source of the error (e.g., JavaScript, React, Angular)
  const source = detectErrorSource(errorKey);

  // Lookup the error in the database
  const errorEntry = errorMappings[errorKey];

  if (errorEntry) {
    return {
      type: source || errorEntry.type || "Unknown",
      description: errorEntry.description || errorKey,
      solution: errorEntry.solution || "Refer to official documentation.",
      cause: errorEntry.cause || "Identified from database.",
    };
  }

  // Return generic response for unknown errors
  return {
    type: source || "Unknown",
    description: parsedError || "Unrecognized error format.",
    cause: "Unknown error type.",
    solution: "Please refer to official documentation or debug further.",
  };
}

module.exports = { getErrorSolution };

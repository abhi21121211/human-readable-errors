// src/parsers/stackTraceParser.js

/**
 * Parses a stack trace to extract the first error message line.
 * @param {string} stackTrace - The stack trace string.
 * @returns {string|null} - Extracted error message or null if invalid input.
 */
function parseStackTrace(stackTrace) {
  if (!stackTrace || typeof stackTrace !== "string") return null;

  // Match the first line that contains "Error" or similar keywords
  const match = stackTrace.match(/^\s*(?:[a-zA-Z]*Error):\s[^\n]+/m);
  return match ? match[0].trim() : null;
}

module.exports = { parseStackTrace };

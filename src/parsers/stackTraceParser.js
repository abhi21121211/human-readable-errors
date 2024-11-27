/**
 * Parses a stack trace into a structured object.
 * @param {string} errorString - The error message or stack trace.
 * @returns {Object} - Parsed stack trace with message and stack trace details.
 */
function parseStackTrace(errorString) {
  const errorPattern = /^([a-zA-Z]+Error): (.*?)$/m; // Matches "TypeError: Cannot read property..."
  const stackPattern = /^\s*at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/gm; // Matches stack trace lines

  const errorMatch = errorString.match(errorPattern);
  const stackMatches = [...errorString.matchAll(stackPattern)];

  const stackTrace = stackMatches.map((match) => ({
    functionName: match[1],
    file: match[2],
    lineNumber: parseInt(match[3], 10),
    columnNumber: parseInt(match[4], 10),
  }));

  return {
    message: errorMatch
      ? `${errorMatch[1]}: ${errorMatch[2]}`
      : "Unknown error message",
    stackTrace: stackTrace.length ? stackTrace : null,
  };
}

export { parseStackTrace };

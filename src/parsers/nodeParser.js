/**
 * Parses a Node.js error string to extract error details.
 * @param {string} errorString - The error message or stack trace.
 * @returns {Object} - Parsed error details, including type, description, file, line number, and column number.
 */
function nodeParser(errorString) {
  if (!errorString || typeof errorString !== "string") {
    return {
      type: "UnknownError",
      description: "Invalid error string provided.",
      file: null,
      lineNumber: null,
      columnNumber: null,
    };
  }

  // Matches the first line of an error message to extract the type and message
  const errorPattern = /^(?<type>[a-zA-Z]+Error):\s(?<description>.+)$/m;
  // Matches the first occurrence of a file, line, and column in a stack trace
  const stackPattern = /\((?<file>[^:]+):(?<line>\d+):(?<column>\d+)\)/;

  const errorMatch = errorString.match(errorPattern);
  const stackMatch = errorString.match(stackPattern);

  return {
    type: errorMatch?.groups?.type || "UnknownError",
    description:
      `${errorMatch?.groups?.type}: ${errorMatch?.groups?.description}` ||
      errorMatch?.groups?.description ||
      "Unknown description",
    file: stackMatch?.groups?.file || null,
    lineNumber: stackMatch?.groups?.line
      ? parseInt(stackMatch.groups.line, 10)
      : null,
    columnNumber: stackMatch?.groups?.column
      ? parseInt(stackMatch.groups.column, 10)
      : null,
  };
}

export { nodeParser };

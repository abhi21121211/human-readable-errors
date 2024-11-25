// src/parsers/reactParser.js

function reactParser(errorString) {
  const errorPattern = /^(.*?): (.*?)\n/; // Matches error type and message
  const stackPattern = /at (.*?) \(([^)]+):(\d+):(\d+)\)/; // Matches stack trace

  const errorMatch = errorString.match(errorPattern);
  const stackMatch = errorString.match(stackPattern);

  return {
    type: errorMatch ? errorMatch[1] : "UnknownError",
    description: errorMatch ? errorMatch[2] : "Unknown description",
    component: stackMatch ? stackMatch[1] : null,
    file: stackMatch ? stackMatch[2] : null,
    lineNumber: stackMatch ? parseInt(stackMatch[3], 10) : null,
    columnNumber: stackMatch ? parseInt(stackMatch[4], 10) : null,
  };
}
export { reactParser };

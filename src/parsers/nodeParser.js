// src/parsers/nodeParser.js

function nodeParser(errorString) {
  const errorPattern = /^(.*?): (.*?)\n/; // Matches error type and message
  const stackPattern = /\(([^)]+):(\d+):(\d+)\)/; // Matches file, line, and column in stack trace

  const errorMatch = errorString.match(errorPattern);
  const stackMatch = errorString.match(stackPattern);

  return {
    type: errorMatch ? errorMatch[1] : "UnknownError",
    description: errorMatch ? errorMatch[2] : "Unknown description",
    file: stackMatch ? stackMatch[1] : null,
    lineNumber: stackMatch ? parseInt(stackMatch[2], 10) : null,
    columnNumber: stackMatch ? parseInt(stackMatch[3], 10) : null,
  };
}

module.exports = nodeParser;

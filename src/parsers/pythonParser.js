// src/parsers/pythonParser.js

function parsePythonError(errorString) {
  const pythonErrorRegex =
    /(.*Error):\s*(.*)\n\s*File\s*"(.*?)",\s*line\s*(\d+)/;

  const match = errorString.match(pythonErrorRegex);
  if (!match) {
    return null;
  }

  return {
    type: match[1],
    description: match[2],
    file: match[3],
    lineNumber: parseInt(match[4], 10),
    columnNumber: null, // Python errors don't include column numbers
  };
}
export { parsePythonError };

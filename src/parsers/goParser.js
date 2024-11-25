// src/parsers/goParser.js

function parseGoError(errorString) {
  const goErrorRegex = /(.*?):(\d+):(\d+):\s*(.*?)$/;

  const match = errorString.match(goErrorRegex);
  if (!match) {
    return null;
  }

  return {
    type: "GoError",
    description: match[4],
    file: match[1],
    lineNumber: parseInt(match[2], 10),
    columnNumber: parseInt(match[3], 10),
  };
}

export { parseGoError };

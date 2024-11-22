// src/parsers/angularParser.js

function parseAngularError(errorString) {
  const angularErrorRegex =
    /Error:\s*(.*?)\n\s*at\s*(.*?)\s*\((.*?):(\d+):(\d+)\)/;

  const match = errorString.match(angularErrorRegex);
  if (!match) {
    return null;
  }

  return {
    type: "AngularError",
    description: match[1],
    file: match[3],
    lineNumber: parseInt(match[4], 10),
    columnNumber: parseInt(match[5], 10),
  };
}

module.exports = { parseAngularError };

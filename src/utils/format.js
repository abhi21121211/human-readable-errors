// src/utils/format.js

function prettyPrintError(errorObject) {
  // console.log(errorObject, "fffffffffffff errorObject");
  return `
[ERROR INSIGHT]
Type: ${errorObject.type}
environment: ${errorObject.environment}
Description: ${errorObject.description}
File: ${errorObject.file} (Line: ${errorObject.lineNumber}, Column: ${
    errorObject.columnNumber
  })
Cause: ${errorObject.cause}
Solution: ${errorObject.solution}
matchScore: ${errorObject.matchScore}
suggestions: ${errorObject.suggestions || "No suggestions available."}
  `;
}
export { prettyPrintError };

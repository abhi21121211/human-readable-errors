// src/utils/format.js

function prettyPrintError(errorObject) {
  return `
[ERROR INSIGHT]
Type: ${errorObject.type}
Description: ${errorObject.description}
File: ${errorObject.file} (Line: ${errorObject.lineNumber}, Column: ${errorObject.columnNumber})
Cause: ${errorObject.cause}
Solution: ${errorObject.solution}
  `;
}
export { prettyPrintError };

/**
 * Detects the source environment (e.g., node, react) based on error string.
 * @param {string} errorString - The error string to analyze.
 * @returns {string} - The detected environment.
 */
function detectErrorSource(errorString) {
  if (errorString.includes("React")) return "react";
  if (errorString.includes("Node.js") || errorString.includes("ENOENT"))
    return "node";
  return "general";
}

export default detectErrorSource;

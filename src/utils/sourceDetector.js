/**
 * Detects the source environment (e.g., Node.js, React, Django) based on the error string.
 * @param {string} errorString - The error string to analyze.
 * @returns {object} - The detected environment with language and framework.
 */
function detectErrorSource(errorString) {
  // JavaScript General Errors
  if (
    errorString.includes("TypeError") ||
    errorString.includes("ReferenceError") ||
    errorString.includes("SyntaxError")
  ) {
    // Detect Node.js
    if (
      errorString.includes("internal/modules") ||
      errorString.includes("require") ||
      errorString.includes("process")
    ) {
      return { language: "javascript", framework: "node" };
    }

    // Detect React
    if (
      errorString.includes("React") ||
      errorString.includes("render") ||
      errorString.includes("useState")
    ) {
      return { language: "javascript", framework: "react" };
    }

    // Fallback to JavaScript General
    return { language: "javascript", framework: "general" };
  }

  // Python General Errors
  if (
    errorString.includes("Traceback") ||
    errorString.includes("AttributeError") ||
    errorString.includes("KeyError") ||
    errorString.includes("TypeError")
  ) {
    // Detect Django
    if (
      errorString.includes("django") ||
      errorString.includes("middleware") ||
      errorString.includes("views")
    ) {
      return { language: "python", framework: "django" };
    }

    // Fallback to Python General
    return { language: "python", framework: "general" };
  }

  // Java General Errors
  if (
    errorString.includes("NullPointerException") ||
    errorString.includes("ClassNotFoundException") ||
    errorString.includes("IllegalStateException")
  ) {
    // Detect Java Spring
    if (
      errorString.includes("spring") ||
      errorString.includes("beans") ||
      errorString.includes("context")
    ) {
      return { language: "java", framework: "spring" };
    }

    // Fallback to Java General
    return { language: "java", framework: "general" };
  }

  // Add more languages and frameworks here as needed

  // Fallback if no specific language or framework is detected
  return { language: "unknown", framework: "general" };
}

export default detectErrorSource;

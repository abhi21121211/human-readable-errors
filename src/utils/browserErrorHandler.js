import { handleError } from "../main.js";

/**
 * Initialize global error handling for browser applications.
 */
export async function initializeBrowserErrorHandler() {
  // Handle runtime errors
  window.onerror = (message, source, lineno, colno, error) => {
    const parsedError = handleError(error || message);
    console.error("Human-Readable Error:", parsedError);
  };

  // Handle unhandled promise rejections
  window.onunhandledrejection = (event) => {
    const parsedError = handleError(event.reason);
    console.error("Human-Readable Error:", parsedError);
  };
}

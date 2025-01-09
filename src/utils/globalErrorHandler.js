import { handleError, handlePrettyError } from "../main.js";

/**
 * Initialize global error handling for Node.js applications.
 */
export function initializeNodeErrorHandler() {
  process.on("uncaughtException", async (error) => {
    try {
      const parsedError = await handlePrettyError(error); // Await the result of handleError
      console.error("Actual error:", error);
      console.error("Human-Readable Error:", parsedError);
    } catch (err) {
      console.error("Failed to parse error:", err);
    }
  });

  process.on("unhandledRejection", async (reason) => {
    try {
      const parsedError = await handlePrettyError(reason); // Await the result of handleError
      console.error("Actual reason:", reason);
      console.error("Human-Readable Error:", parsedError);
    } catch (err) {
      console.error("Failed to parse error:", err);
    }
  });
}

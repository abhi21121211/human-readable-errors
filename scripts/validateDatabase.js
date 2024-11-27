import fs from "fs";
import path from "path";

const databaseDir = path.resolve("database");

/**
 * Validates the JSON files in the database directory.
 */
function validateDatabase() {
  const languages = fs.readdirSync(databaseDir);

  languages.forEach((language) => {
    const frameworksDir = path.join(databaseDir, language);
    const frameworks = fs.readdirSync(frameworksDir);

    frameworks.forEach((frameworkFile) => {
      const frameworkPath = path.join(frameworksDir, frameworkFile);

      try {
        const fileContent = fs.readFileSync(frameworkPath, "utf8");
        if (!fileContent.trim()) {
          throw new Error(
            `The file ${frameworkFile} is empty. Please provide valid JSON content.`
          );
        }

        // Attempt to parse the JSON content
        JSON.parse(fileContent);

        console.log(`✔️  ${frameworkFile} is valid.`);
      } catch (err) {
        console.error(
          `❌ Validation failed for ${frameworkFile}: ${err.message}`
        );
      }
    });
  });
}

// Run the validation
validateDatabase();

import eslintPluginReact from "eslint-plugin-react";
import js from "@eslint/js";

export default [
  js.configs.recommended, // Include recommended JS rules
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Treat files as ES modules
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      react: eslintPluginReact, // Include React plugin
    },

    rules: {
      "react/jsx-uses-react": "error", // Prevent React being marked as unused
      "react/jsx-uses-vars": "error", // Prevent JSX variables being marked as unused
      "no-console": "off", // Allow console statements
      "no-constant-condition": "off", // Disable warnings for constant conditions
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  {
    files: [
      "src/utils/globalErrorHandler.js",
      "tests/**/*.js",
      "tests/**/*.mjs",
    ], // Apply to test files
    languageOptions: {
      globals: {
        process: "readonly", // Add 'process' for Node.js-specific files
        setTimeout: "readonly", // Add 'setTimeout' for Node.js
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn", // Avoid unnecessary warnings for unused variables
    },
  },
  {
    files: ["src/utils/browserErrorHandler.js"],
    languageOptions: {
      globals: {
        window: "readonly", // Add 'window' for browser-specific files
      },
    },
    rules: {
      "no-undef": "error", // Ensure undefined variables are caught
    },
  },
];

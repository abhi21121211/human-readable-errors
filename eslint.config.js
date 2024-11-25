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
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn", // Avoid unnecessary warnings for unused variables
    },
  },
];

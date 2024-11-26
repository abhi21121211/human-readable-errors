---
# `human-readable-errors`

A lightweight and developer-friendly library to decode and resolve error messages with **human-readable insights**. Perfect for debugging and understanding common runtime errors across platforms like Node.js, React, and more!
---

## 🚀 Features

- **Human-Readable Error Messages**: Transforms cryptic stack traces into actionable insights.
- **Multi-Framework Support**: Prebuilt parsers for Node.js and React errors.
- **Customizable Database**: Add your own error-to-solution mappings.
- **Similarity Matching**: Finds the closest match for unlisted errors using similarity algorithms.
- **Lightweight & Fast**: Minimal dependencies, optimized for performance.

---

## 📦 Installation

To use `human-readable-errors` in your project, install it via npm:

```bash
npm install human-readable-errors
```

---

## 🛠️ Usage

Here’s a quick example to get started:

### Basic Usage

```javascript
const { getErrorSolution } = require("human-readable-errors");

// Input: A sample error stack trace
const errorMessage = "TypeError: Cannot read property 'xyz' of undefined";

// Get a human-readable solution
const result = getErrorSolution(errorMessage);

console.log(result);
/*
Output:
{
  type: "JavaScript",
  error: "TypeError: Cannot read property 'xyz' of undefined",
  description: "An object is being accessed without proper initialization.",
  solution: "Ensure the object is properly initialized before accessing its properties.",
  cause: "The object is either undefined or null."
}
*/
```

---

### Advanced Usage

#### Customize Error Mappings

You can add custom error mappings in the `errorMappings.json` file:

```json
{
  "CustomError: Something went wrong!": {
    "description": "A custom error occurred.",
    "solution": "Check your application configuration.",
    "type": "Custom",
    "cause": "Incorrect setup or missing configuration."
  }
}
```

#### Using Parsers

Access specific parsers for framework-specific errors:

```javascript
const {
  parseNodeError,
  parseReactError,
} = require("human-readable-errors/src/parsers");

const nodeError = parseNodeError("Error: Cannot find module 'xyz'");
console.log(nodeError);

const reactError = parseReactError(
  "TypeError: Cannot read property 'xyz' of undefined"
);
console.log(reactError);
```

---

## 🔍 Key Modules

### Main Modules

1. **`getErrorSolution(errorMessage)`**

   - **Input**: An error message (string).
   - **Output**: A detailed solution object.
   - **Description**: Finds the best-matching solution for the provided error.

2. **`parseNodeError(stackTrace)`**

   - Parses Node.js-specific error messages.

3. **`parseReactError(stackTrace)`**
   - Parses React-specific error messages.

### Utility Modules

- **Similarity Matching**  
  Located in `src/utils/similarity.js`. Uses string similarity algorithms to find close matches for unknown errors.

- **Error Database**  
  Located in `src/database/errorMappings.json`. Stores error-to-solution mappings.

---

## 🧪 Testing

To run the test suite:

```bash
npm test
```

Test coverage includes:

- **Parsers**: Verifying framework-specific error parsing.
- **Database Matching**: Ensuring correct error-to-solution mappings.
- **Utilities**: Validating similarity matching algorithms.

---

## 🏗️ Folder Structure

```
human-readable-errors/
│
├── src/                        # Source code folder
│   ├── parsers/                # Parsers for error messages
│   │   ├── index.js            # Main entry for parsers
│   │   ├── nodeParser.js       # Node.js error parser
│   │   └── reactParser.js      # React error parser
│   │
│   ├── database/               # Error mapping database
│   │   ├── index.js            # Helper functions to fetch error mappings
│   │   └── errorMappings.json  # Error-to-solution mapping file
│   │
│   ├── utils/                  # Utility functions
│   │   └── similarity.js       # Similarity algorithms for error matching
│   │
│   ├── main.js                 # Main library entry point
│
├── tests/                      # Unit tests
│   ├── parsers.test.js         # Test cases for parsers
│   ├── database.test.js        # Test cases for database module
│   ├── utils.test.js           # Test cases for utility functions
│
├── examples/                   # Example usage for developers
│   ├── basicUsage.js           # Basic usage example
│
├── .gitignore                  # Git ignore file
├── package.json                # npm configuration
├── README.md                   # Documentation
├── LICENSE                     # License file
└── CONTRIBUTING.md             # Contribution guidelines
```

---

## 👨‍💻 Contributing

We welcome contributions to make `human-readable-errors` even better! Please check the `CONTRIBUTING.md` for detailed contribution guidelines.

### Steps to Contribute:

1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and write tests.
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## 🚨 Common Issues

### Error: “No matching solution found for [errorMessage]”

- This happens when no close match is found in the database. You can:
  - Add a custom mapping to `errorMappings.json`.
  - Improve the similarity threshold in `src/utils/similarity.js`.

### Error: “Cannot find module”

- Ensure `human-readable-errors` is installed correctly:
  ```bash
  npm install human-readable-errors
  ```

---

## 📜 License

This library is licensed under the **MIT License**. Feel free to use and modify it in your projects.

---

## 🌟 Feedback & Support

If you have any questions or feature requests, feel free to:

- Open an issue on the [GitHub repository](https://github.com/your-username/human-readable-errors).
- Reach out via email at `support@human-readable-errors.dev`.

---

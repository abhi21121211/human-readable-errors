# Human-Readable-Errors

Effortlessly decode cryptic error messages into clear, actionable insights with **`human-readable-errors`**! Designed for developers, this library helps you identify the root causes of errors, suggests practical solutions, and even educates you on debugging strategies.

---

## Features

### Multi-Language & Framework Support

- **Languages**:
  - **JavaScript** (General, Node.js, React)
  - **Python** (General, Django)
  - **Java** (General, Spring)
- Automatically detects the programming language and framework based on the error message.

### Smart Error Parsing

- Analyzes error messages and stack traces to extract valuable debugging information.
- Provides structured insights into the type, cause, and severity of errors.

### Rich Database of Solutions

- Extensive mappings of common errors with:
  - Detailed descriptions
  - Likely causes
  - Tested solutions
  - Example code snippets
  - Links to official documentation and resources

### Row Error Handling

- Unrecognized errors are automatically added as "rowErrors."
- Row errors are indexed and incorporated into the main database within 24 hours.

### Intelligent Matching

- Utilizes **string similarity algorithms** to find the best match for your error.
- Outputs a match score, reflecting the confidence level of the suggested solution.

### Developer-Centric Design

- Easily extendable to include new languages, frameworks, and error mappings.
- Designed for scalability, maintainability, and performance.

---

## Installation

Install the library via npm:

```bash
npm install human-readable-errors
```

---

## Usage Examples

### Basic Usage

```javascript
const { handleError } = require("human-readable-errors");

const errorString = "TypeError: Cannot read property 'length' of undefined";

handleError(errorString)
  .then((errorDetails) => {
    console.log(errorDetails);
  })
  .catch((err) => {
    console.error(err);
  });
```

### Pretty Printed Output

```javascript
const { handlePrettyError } = require("human-readable-errors");

const errorString = "ReferenceError: x is not defined";

handlePrettyError(errorString)
  .then((prettyError) => {
    console.log(prettyError);
  })
  .catch((err) => {
    console.error(err);
  });
```

---

## Initialization

You can initialize global error handling for browser or Node.js environments using:

```javascript
const { initializeHumanReadableErrors } = require("human-readable-errors");

initializeHumanReadableErrors();
```

---

## API Endpoints (if applicable)

### 1. Search Errors

**Endpoint**: `POST /errors/search`

Search for errors using fuzzy search capabilities.

**Request Body**:

```json
{
  "query": "SyntaxError: Unexpected token"
}
```

**Response Example**:

```json
[
  {
    "id": "12345",
    "language": "JavaScript",
    "type": "Error",
    "error": "SyntaxError: Unexpected token",
    "description": "An unexpected token is encountered during parsing.",
    "cause": ["Missing closing bracket", "Unescaped special character"],
    "solution": [
      "Check the syntax around the reported token",
      "Ensure special characters are properly escaped"
    ]
  }
]
```

---

## Contribution

We welcome contributions to improve the library! Whether it's adding new error mappings, enhancing features, or fixing bugs, check out our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Feedback & Support

Have a question or suggestion? Feel free to:

- Open an issue on [GitHub](https://github.com/abhi21121211/human-readable-errors/issues).
- Share your thoughts with the community!

---

## Full API Example

```javascript
const {
  handleError,
  handlePrettyError,
  initializeHumanReadableErrors,
  initializeNodeErrorHandler,
  initializeBrowserErrorHandler,
} = require("human-readable-errors");

// Initialize global error handling
initializeHumanReadableErrors();

// Handle an error and get detailed output
handleError("TypeError: Cannot read property 'foo' of undefined")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Pretty print error details
handlePrettyError("ReferenceError: bar is not defined")
  .then((formattedError) => {
    console.log(formattedError);
  })
  .catch((error) => {
    console.error(error);
  });
```

---

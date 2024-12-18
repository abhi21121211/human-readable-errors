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

### ElasticSearch Integration

- Enables quick, real-time search for errors.
- Supports fuzzy search for flexible querying.

### Row Error Handling

- If an error is not found in the database, it is added as a "rowError".
- Row errors are indexed and added to the main database the next day, ensuring the database continuously evolves and becomes unbeatable.

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

const errorDetails = handleError(errorString, undefined, undefined, true);

console.log(errorDetails);
```

### Expanded Error Format Example

```json
{
  "language": "JavaScript",
  "framework": "React",
  "type": "Error",
  "code": "JSX100",
  "error": "Expected an assignment or function call.",
  "severity": "High",
  "description": "Occurs when you write invalid JSX syntax.",
  "cause": [
    "Missing parentheses in JSX.",
    "Incorrect return value in a functional component."
  ],
  "solution": [
    "Ensure JSX expressions are wrapped in parentheses.",
    "Return valid JSX or null in functional components."
  ],
  "tags": ["React", "JSX", "Error"],
  "examples": [
    {
      "code": "function App() { return <div> <h1> Hello </h1>; }",
      "output": "SyntaxError: Expected an assignment or function call."
    }
  ],
  "links": ["https://reactjs.org/docs/introducing-jsx.html"],
  "resources": {
    "videos": ["https://youtube.com/example-jsx-video"],
    "tutorials": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors"
    ]
  },
  "meta": {
    "added_by": "John Doe",
    "last_updated": "2024-12-04"
  }
}
```

---

## API Endpoints

### 1. Search Errors

**Endpoint**: `POST /errors/search`

Search for errors using ElasticSearch-powered fuzzy search.

**Request Body**:

```json
{
  "query": "SyntaxError: Unexpected token"
}
```

**Response**:

```json
[
  {
    "id": "12345",
    "language": "JavaScript",
    "type": "Error",
    "code": "E001",
    "error": "SyntaxError: Unexpected token",
    "severity": "High",
    "description": "An unexpected token is encountered during parsing.",
    "cause": ["Missing closing bracket", "Unescaped special character"],
    "solution": [
      "Check the syntax around the reported token",
      "Ensure special characters are properly escaped"
    ],
    "tags": ["syntax", "parsing"],
    "examples": [
      {
        "code": "console.log(\"Hello\",);",
        "output": "SyntaxError: Unexpected token ')'"
      }
    ]
  }
]
```

### 2. Add New Error

**Endpoint**: `POST /errors`

Add a new error entry to the database.

**Request Body**:

```json
{
  "id": "67890",
  "language": "Python",
  "framework": "Flask",
  "type": "Warning",
  "code": "W002",
  "error": "ModuleNotFoundError: No module named 'flask'",
  "severity": "Medium",
  "description": "Flask module is not installed or not found.",
  "cause": [
    "Flask module is not installed",
    "Virtual environment not activated"
  ],
  "solution": [
    "Run 'pip install flask' to install the module",
    "Activate your virtual environment before running the application"
  ],
  "tags": ["module", "flask", "python"],
  "examples": [
    {
      "code": "import flask\napp = flask.Flask(__name__)",
      "output": "ModuleNotFoundError: No module named 'flask'"
    }
  ]
}
```

### 3. Update an Error

**Endpoint**: `PUT /errors/:id`

Update an existing error entry.

### 4. Delete an Error

**Endpoint**: `DELETE /errors/:id`

Delete an error entry by its unique ID.

### 5. Row Error Handling

**Endpoint**: `POST /errors/rowErrors`

When an error is not present in the database, it is automatically added as a row error. Row errors are indexed and reviewed to ensure they are added to the main database within 24 hours, enhancing the accuracy and breadth of the error database.

**Response Example**:

```json
{
  "message": "Error added as a rowError. It will be indexed soon.",
  "status": "pending"
}
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

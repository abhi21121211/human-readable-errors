# 🌟 Human-Readable-Errors

Effortlessly decode cryptic error messages into clear, actionable insights with **`human-readable-errors`**! Designed for developers, this library helps you identify the root causes of errors, suggests practical solutions, and even educates you on debugging strategies.

---

## 🚀 Features

### 🛠️ **Multi-Language & Framework Support**

- **Languages**:
  - 🟢 **JavaScript** (General, Node.js, React)
  - 🟡 **Python** (General, Django)
  - 🔵 **Java** (General, Spring)
- Automatically detects the programming language and framework based on the error message.

### 🔍 **Smart Error Parsing**

- Analyzes error messages and stack traces to extract valuable debugging information.
- Provides structured insights into the type, cause, and severity of errors.

### 📚 **Rich Database of Solutions**

- Extensive mappings of common errors with:
  - Detailed descriptions
  - Likely causes
  - Tested solutions
  - Example code snippets
  - Links to official documentation and resources

### 🤖 **Intelligent Matching**

- Utilizes **string similarity algorithms** to find the best match for your error.
- Outputs a match score, reflecting the confidence level of the suggested solution.

### 🛡️ **Fallback Suggestions**

- Offers fallback recommendations for debugging when an error isn’t found in the database.

### 🎨 **User-Friendly Output**

- ✨ Color-coded and emoji-enhanced formatting for easy readability.
- Choose between formatted or plain object output.

### 🛡️ **Developer-Centric Design**

- Easily extendable to include new languages, frameworks, and error mappings.
- Designed for scalability, maintainability, and performance.

---

## 📦 Installation

Install the library via npm:

```bash
npm install human-readable-errors
```

---

## 🗂️ Folder Structure

```plaintext
human-readable-errors/
│
├── database/                              # Centralized database for error mappings
│   ├── javascript/                        # JavaScript-specific errors
│   │   ├── general.json                   # General JS errors
│   │   ├── node.json                      # Node.js-specific errors
│   │   ├── react.json                     # React-specific errors
│   └── python/                            # Python-specific errors
│       ├── general.json                   # General Python errors
│       ├── django.json                    # Django-specific errors
│   └── java/                              # Java-specific errors
│       ├── general.json                   # General Java errors
│       ├── spring.json                    # Spring framework errors
│   └── unknown/                           # Fallback errors for unsupported environments
│
├── src/                                   # Core functionality
│   ├── parsers/                           # Error parsers
│   ├── database/                          # Database handlers
│   ├── utils/                             # Utility functions
│   └── main.js                            # Entry point
│
├── tests/                                 # Test cases
├── examples/                              # Usage examples
├── .gitignore                             # Git ignore file
├── package.json                           # npm configuration
├── README.md                              # Documentation
├── LICENSE                                # License file
└── CONTRIBUTING.md                        # Contribution guidelines
```

---

## ✨ Usage Examples

### **Basic Usage**

```javascript
import { handleError } from "human-readable-errors";

const errorString = "TypeError: Cannot read property 'length' of undefined";

const errorDetails = handleError(errorString, undefined, undefined, true);

console.log(errorDetails);
```

**Sample Output**:

```plaintext
🌐 [ENVIRONMENT]: JavaScript/General
🛑 [ERROR TYPE]: TypeError
📋 [DESCRIPTION]: Cannot read property 'length' of undefined
❓ [CAUSE]:
  - The variable is not initialized or is set to undefined.
  - A function did not return the expected value.
💡 [SOLUTION]:
  - Ensure the variable is defined and has the expected value before accessing its properties.
  - Add null or undefined checks before accessing object properties.
🔗 [REFERENCE]:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undefined
```

### **Multi-Language Error Handling**

```javascript
const pythonError = "Traceback (most recent call last): ... AttributeError";

const errorDetails = handleError(pythonError);

console.log(errorDetails);
```

### **Fallback Example**

```javascript
const unknownError = "Unexpected error occurred.";

const errorDetails = handleError(unknownError);

console.log(errorDetails);
```

---

## 🧪 Testing

Run the full suite of tests to ensure functionality:

```bash
npm test
```

Includes:

- Unit tests for error parsers, database handlers, and utility functions.
- Integration tests for end-to-end error handling workflows.

---

## 🛡️ Extending the Database

Adding new error mappings is straightforward. Each error mapping includes:

- **Type**: The type/category of the error.
- **Description**: A detailed explanation.
- **Cause**: Likely reasons for the error.
- **Solution**: Steps to resolve the issue.
- **Examples**: Code examples that trigger the error.
- **Links**: References for further reading.

To add an error, update the respective JSON file in the `database/` directory.

---

## 🛠️ Features in Development

- **API Integration**: Fetch real-time error solutions from an external API.
- **IDE Plugins**: Show error insights directly within your code editor.
- **Improved Caching**: Faster error matching with enhanced caching mechanisms.

---

## 🤝 Contribution

We welcome contributions to improve the library! Whether it's adding new error mappings, enhancing features, or fixing bugs, check out our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📬 Feedback & Support

Have a question or suggestion? Feel free to:

- Open an issue on [GitHub](https://github.com/abhi21121211/human-readable-errors/issues).
- Share your thoughts with the community!

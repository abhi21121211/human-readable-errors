const errorDatabase = {
  "TypeError: Cannot read property 'x' of undefined": {
    type: "JavaScript",
    description: "TypeError: Cannot read property 'x' of undefined",
    solution:
      "Check if the object is properly initialized before accessing properties.",
    cause: "The object being accessed is null or undefined.",
  },
  "JavaScript - TypeError: Cannot read property 'x' of undefined": {
    type: "TypeError",
    solution:
      "Check if the object is properly initialized before accessing properties.",
  },
  "JavaScript - ReferenceError: x is not defined": {
    type: "ReferenceError",
    solution: "Declare the variable before using it.",
  },

  "JavaScript - SyntaxError: Unexpected token": {
    type: "SyntaxError",
    solution:
      "Check the code syntax, such as missing braces, semicolons, or invalid tokens.",
  },
  "Node.js - Error: Cannot find module": {
    type: "ModuleError",
    solution: "Ensure the module is installed and correctly imported.",
  },
  "Node.js - ECONNREFUSED: Connection refused": {
    type: "ConnectionError",
    solution:
      "Check if the server is running and reachable at the specified address and port.",
  },
  "Angular - ExpressionChangedAfterItHasBeenCheckedError": {
    type: "AngularError",
    solution:
      "Ensure changes to bindings are done inside Angular's lifecycle hooks, not asynchronously.",
  },
  "Angular - Template parse errors": {
    type: "AngularError",
    solution: "Check for typos or invalid Angular template syntax.",
  },
  "React - Invalid hook call": {
    type: "ReactError",
    solution:
      "Ensure hooks are used in functional components and not conditionally.",
  },
  "React - Warning: Each child in a list should have a unique 'key' prop": {
    type: "ReactWarning",
    solution: "Add a unique `key` prop to each child element in the list.",
  },
  "Python - KeyError: 'key'": {
    type: "KeyError",
    solution:
      "Check if the key exists in the dictionary before accessing it, or use the `.get()` method.",
  },
  "Python - IndexError: list index out of range": {
    type: "IndexError",
    solution:
      "Ensure the index you're trying to access is within the range of the list.",
  },
  "Python - ModuleNotFoundError: No module named 'module'": {
    type: "ModuleNotFoundError",
    solution:
      "Ensure the module is installed and the correct environment is activated.",
  },
  "Python - ZeroDivisionError: division by zero": {
    type: "ZeroDivisionError",
    solution:
      "Avoid dividing a number by zero; check the divisor before performing the operation.",
  },
  "Go - nil pointer dereference": {
    type: "GoError",
    solution: "Check for nil before dereferencing pointers in your code.",
  },
  "Go - index out of range": {
    type: "GoError",
    solution: "Ensure the index is within the bounds of the array or slice.",
  },
  "Go - import cycle not allowed": {
    type: "GoError",
    solution:
      "Avoid circular dependencies in your imports; restructure your code to remove the cycle.",
  },
  "Java - NullPointerException": {
    type: "NullPointerError",
    solution:
      "Check if the object or variable is null before accessing its methods or properties.",
  },
  "Java - ArrayIndexOutOfBoundsException": {
    type: "IndexError",
    solution: "Ensure the index is within the bounds of the array.",
  },
  "Java - ClassNotFoundException": {
    type: "ClassNotFoundError",
    solution: "Ensure the required class is available on the classpath.",
  },
  "PHP - Fatal error: Call to undefined function": {
    type: "FunctionError",
    solution:
      "Ensure the function is defined and the necessary extensions are enabled.",
  },
  "PHP - Parse error: syntax error, unexpected 'x'": {
    type: "SyntaxError",
    solution:
      "Check for syntax issues like missing semicolons or unmatched braces.",
  },
  "PHP - Warning: Undefined variable": {
    type: "Warning",
    solution:
      "Declare the variable or ensure it is passed to the scope where it is used.",
  },
  "Ruby - NameError: undefined local variable or method": {
    type: "NameError",
    solution:
      "Ensure the variable or method is defined and within the correct scope.",
  },
  "Ruby - NoMethodError: undefined method": {
    type: "NoMethodError",
    solution:
      "Ensure the method exists and is being called on the correct object.",
  },
  "C# - NullReferenceException": {
    type: "NullReferenceError",
    solution: "Check if the object is null before accessing its members.",
  },
  "C# - IndexOutOfRangeException": {
    type: "IndexError",
    solution:
      "Ensure the index is within the bounds of the array or collection.",
  },
  "C++ - Segmentation fault": {
    type: "SegmentationError",
    solution: "Check for invalid memory access or dereferencing null pointers.",
  },
  "C++ - std::out_of_range": {
    type: "RangeError",
    solution: "Ensure the index or key is within the bounds of the container.",
  },
  "General - Out of Memory": {
    type: "MemoryError",
    solution:
      "Optimize the memory usage or allocate more memory to the program.",
  },
  "General - StackOverflowError": {
    type: "StackOverflowError",
    solution:
      "Check for infinite recursion or excessively deep function calls.",
  },
};

const fallbackError = {
  type: "Unknown",
  description: "An unknown error occurred.",
  solution: "Please refer to official documentation or debug further.",
  cause: "Unknown error type.",
};

// Exporting the database and fallback
export { errorDatabase, fallbackError };

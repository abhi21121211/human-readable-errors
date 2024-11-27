import { handleError } from "../src/main.js";

const errorString = `
TypeError: Cannot read property 'length' of undefined
    at Object.<anonymous> (/path/to/file.js:10:15)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
`;

const language = "javascript";
const framework = "general";

const result = handleError(errorString, language, framework, true);
console.log(result);

import { handleError } from "../src/main.js";

const errorString = `TypeError: Cannot read property 'length' of undefined
    at Object.<anonymous> (/path/to/file.js:10:15)`;
console.log("test xyz");
let a = await handleError(errorString);
console.log(a);

const prompt = require('prompt-sync')();

let yourName = prompt("What is your name? ");
let firstChar = yourName.slice(0,1)

let upperCaseFirstChar = firstChar.toUpperCase();

let restOfName = yourName.slice(1, yourName.length);
restOfName = restOfName.toLowerCase();

let capataliseOfName = upperCaseFirstChar + restOfName;


console.log("Hello, " + capataliseOfName);

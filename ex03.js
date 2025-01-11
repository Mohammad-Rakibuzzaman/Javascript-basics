const prompt = require('prompt-sync')();

let dogAge = prompt("How old is your dog?: ");

let humanAge = ((dogAge - 2) * 4) + 21;

console.log("Your dog is in Human years: " + humanAge + " years old.")
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let result = "";
input = input[0];
for (let i = 0; i < input.length; i++) {
  if (input[i] === " ") {
    result += " ";
  } else if (input[i] >= "0" && input[i] <= "9") {
    result += input[i];
  } else if (input[i] >= "a" && input[i] <= "z") {
    if (input[i].charCodeAt() + 13 > 122) {
      result += String.fromCharCode(input[i].charCodeAt() + 13 - 26);
    } else result += String.fromCharCode(input[i].charCodeAt() + 13);
  } else {
    if (input[i].charCodeAt() + 13 > 90) {
      result += String.fromCharCode(input[i].charCodeAt() + 13 - 26);
    } else result += String.fromCharCode(input[i].charCodeAt() + 13);
  }
}
console.log(result);

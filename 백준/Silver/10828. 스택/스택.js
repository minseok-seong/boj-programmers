const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0];
input.shift();
const stack = [];
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i].trim().split(" ")[0] === "push") {
    stack.push(input[i].trim().split(" ")[1]);
  } else if (input[i].trim().split(" ")[0] === "pop") {
    if (stack.length === 0) {
      result += "-1" + "\n";
    } else result += stack.pop() + "\n";
  } else if (input[i].trim().split(" ")[0] === "size") {
    result += stack.length + "\n";
  } else if (input[i].trim().split(" ")[0] === "empty") {
    result += stack.length === 0 ? "1" + "\n" : "0" + "\n";
  } else if (input[i].trim().split(" ")[0] === "top") {
    if (stack.length === 0) {
      result += "-1" + "\n";
    } else result += stack.at(-1) + "\n";
  }
}
console.log(result.trim());

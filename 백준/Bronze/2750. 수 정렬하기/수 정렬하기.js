let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((a) => Number(a)).sort((a, b) => a - b);
let result = "";

for (let i = 0; i < arr.length; i++) {
  result += arr[i].toString() + "\n";
}
console.log(result.trim());

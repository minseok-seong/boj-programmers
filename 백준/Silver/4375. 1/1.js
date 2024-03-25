const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => Number(a));

let result = "";

for (let i = 0; i < input.length; i++) {
  let length = 1;
  let num = 1;
  while (true) {
    if (num % input[i] === 0) {
      result += length + "\n";
      break;
    } else {
      num = (num * 10 + 1) % input[i];
      length++;
    }
  }
}
console.log(result.trim());

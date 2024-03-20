const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
input = input.map((a) => a.trim());

let result = "";
let flag = false;
for (let i = 0; i < input.length; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      stack.push(input[i][j]);
    } else if (input[i][j] === ")") {
      if (stack.at(-1) === "(") {
        stack.pop();
      } else {
        result += "NO" + "\n";
        flag = true;
        break;
      }
    }
  }
  if (flag) {
    flag = false;
  } else {
    if (stack.length === 0) {
      result += "YES" + "\n";
    } else result += "NO" + "\n";
  }
}
console.log(result.trim());

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin");

let result = "";
for (let i = 1; i <= input; i++) {
  result += i + "\n";
}
console.log(result);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let hap = 0;

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}

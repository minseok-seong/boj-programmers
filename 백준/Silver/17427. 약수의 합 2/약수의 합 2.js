let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = +input[0];
let sum = 0;
for (let i = 1; i <= num; ++i) {
  sum += i * Math.floor(num / i);
}

console.log(sum);

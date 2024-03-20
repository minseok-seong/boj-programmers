const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b] = input;
const min = Math.min(a, b);
let temp;
while (b !== 0) {
  temp = b;
  b = a % b;
  a = temp;
}
let lcd = a;
let gcd = (input[0] * input[1]) / lcd;
console.log(lcd + "\n" + gcd);

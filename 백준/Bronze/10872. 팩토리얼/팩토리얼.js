const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const a = parseInt(input);
let hap = 1;

for (let i = a; i >= 1; i--) {
  hap *= i;
}
console.log(hap);

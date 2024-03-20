const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [a, b, c] = input;

const f1 = (a + b) % c;
const s1 = ((a % c) + (b % c)) % c;
const t1 = (a * b) % c;
const f2 = ((a % c) * (b % c)) % c;

console.log(f1 + "\n" + s1 + "\n" + t1 + "\n" + f2);

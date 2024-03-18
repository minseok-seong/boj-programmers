let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((a) => parseInt(a));

const data = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const d = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
  0: "SUN",
};
let a = input[0] - 1;
let b = input[1];
let sum = 0;
for (let i = 1; i <= a; i++) {
  sum += data[i];
}
sum += b;
let c = sum % 7;

console.log(d[c]);

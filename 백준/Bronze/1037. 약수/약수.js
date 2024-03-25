const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let arr = input
  .join("")
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);

let result = 0;
if (arr.length % 2 === 0) {
  result =
    arr[Math.floor(arr.length / 2) - 1] * arr[Math.floor(arr.length / 2)];
} else if (arr.length % 2 === 1) {
  result = arr[Math.floor(arr.length / 2)] * arr[Math.floor(arr.length / 2)];
}
console.log(result);

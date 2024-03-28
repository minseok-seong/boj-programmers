let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input
  .join("")
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  let hap = 0;
  for (let j = 0; j <= i; j++) {
    hap += arr[j];
  }
  arr2.push(hap);
}

console.log(arr2.reduce((a, b) => a + b, 0));

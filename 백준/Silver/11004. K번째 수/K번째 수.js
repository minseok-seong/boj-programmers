const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input[0].split(" ").map((a) => Number(a))[1];
let arr = input[1].split(" ").map((a) => Number(a));

arr.sort((a, b) => a - b);

console.log(arr[n - 1]);

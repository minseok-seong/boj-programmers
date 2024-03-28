let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = input.map((a) => Number(a)).sort((a, b) => a - b)[1];
console.log(arr);

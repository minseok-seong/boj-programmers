const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let first = "";
let second = "";
const [a, b, c, d] = input;
first = a + "" + b;
second = c + "" + d;
console.log(parseInt(first, 10) + parseInt(second, 10));

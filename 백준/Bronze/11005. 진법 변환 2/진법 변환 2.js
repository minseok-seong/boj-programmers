const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b] = input;
a = parseInt(a, 10);
console.log(a.toString(parseInt(b, 10)).toUpperCase());

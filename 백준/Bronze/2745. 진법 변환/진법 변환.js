const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b] = input;
a = parseInt(a, parseInt(b));
console.log(a);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let hap = 0;

console.log(input[1].split("").reduce((a, b) => a + parseInt(b), 0));

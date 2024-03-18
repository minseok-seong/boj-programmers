let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
let string = "";

let a = Math.floor(input.length / 10);
let b = input.length % 10;

for (let i = 0; i < a; i++) {
  console.log(input.slice(i * 10, i * 10 + 10));
}
console.log(input.slice(a * 10));

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const obj = {};
const newStrings = input.map((str) => str.split("\r").join(""));
for (let i = 0; i < newStrings.length; i++) {
  if (obj[newStrings[i]] === undefined) {
    obj[newStrings[i]] = 1;
  }
}

const arr = [];
for (let k in obj) {
  arr.push(k);
}
console.log(
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
);

const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let arr = [];

for (let i = 1; i <= input[0]; i++) {
  arr.push(input[i].split(" "));
}

arr.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

let newarr = [];
for (let i = 0; i < arr.length; i++) {
  newarr.push(arr[i].join(" "));
}

console.log(newarr.join("\n"));

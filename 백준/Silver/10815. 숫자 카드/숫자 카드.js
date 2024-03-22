const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(" ").map((a) => Number(a));
let arr2 = input[3].split(" ").map((a) => Number(a));

let obj = {};

for (let i in arr) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}
let result = "";
for (let i in arr2) {
  if (obj[arr2[i]] === undefined) {
    result += 0 + " ";
  } else {
    result += obj[arr2[i]] + " ";
  }
}
console.log(result);

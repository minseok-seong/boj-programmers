let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const hap = input.map((a) => Number(a)).reduce((a, b) => a + b);
const arr2 = input.map((a) => Number(a)).sort((a, b) => a - b);
let index = 0;
let index2 = 0;
for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] + arr2[j] === hap - 100) {
      index = i;
      index2 = j;
    }
  }
}

arr2.splice(index, 1);
arr2.splice(index2 - 1, 1);
console.log(arr2.join("\n"));

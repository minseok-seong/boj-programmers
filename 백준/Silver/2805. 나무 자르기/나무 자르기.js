const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = input[0].split(" ").map(Number);
arr.sort((a, b) => b - a); // 내림차순으로 정렬

let low = 0;
let high = arr[0]; // 최대 높이
let result = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let hap = arr.reduce((acc, cur) => acc + Math.max(0, cur - mid), 0);

  if (hap >= M) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(" ").map((a) => Number(a));
let arr2 = input[3].split(" ").map((a) => Number(a));
let answer = "";
arr.sort((a, b) => a - b);
const bs = (a) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === a) {
      return mid;
    } else if (arr[mid] < a) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

for (let i = 0; i < arr2.length; i++) {
  if (bs(arr2[i]) !== -1) {
    answer += 1 + "\n";
  } else {
    answer += 0 + " \n";
  }
}
console.log(answer);

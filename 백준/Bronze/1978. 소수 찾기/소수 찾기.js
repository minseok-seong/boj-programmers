const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const arr = input.join("").split(" ");
let c = 0;
const sosu = (a) => {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "1") {
    continue;
  }
  if (sosu(arr[i])) {
    c++;
  }
}

console.log(c);

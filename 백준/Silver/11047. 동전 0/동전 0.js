const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let price = Number(input[0].split(" ")[1]);
input.shift();
let arr = input.map((a) => Number(a)).sort((a, b) => b - a);
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > price) {
    continue;
  } else {
    count += parseInt(price / arr[i]);
    price -= parseInt(price / arr[i]) * arr[i];
  }
  if (price === 0) {
    break;
  }
}
console.log(count);

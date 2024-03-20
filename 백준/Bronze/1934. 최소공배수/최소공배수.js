const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const getlcd = (a, b) => {
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const arr = [];
for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map((a) => Number(a));
  let lcd = getlcd(a, b);
  arr.push((a * b) / lcd);
}
console.log(arr.join("\n"));

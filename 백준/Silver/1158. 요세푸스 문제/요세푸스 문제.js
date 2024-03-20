const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [N, K] = input;
let answer = [];
let count = 0;
let queue = Array.from({ length: N }, (_, index) => index + 1);
while (queue.length > 0) {
  count++;
  let item = queue.shift();
  if (count % K !== 0) {
    queue.push(item);
  } else {
    answer.push(item);
  }
}
console.log("<" + answer.join(", ") + ">");

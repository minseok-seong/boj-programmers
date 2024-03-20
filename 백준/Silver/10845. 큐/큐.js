const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]); // 첫 번째 줄을 정수로 변환하여 저장
input.shift(); // 첫 번째 줄 삭제
input = input.map((a) => a.trim());
const queue = [];
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i].split(" ")[0] === "push") {
    queue.push(input[i].split(" ")[1]);
  } else if (input[i].split(" ")[0] === "pop") {
    if (queue.length === 0) {
      result += "-1" + "\n";
    } else result += queue.shift() + "\n";
  } else if (input[i].split(" ")[0] === "size") {
    result += queue.length + "\n";
  } else if (input[i].split(" ")[0] === "empty") {
    result += queue.length === 0 ? "1" + "\n" : "0" + "\n";
  } else if (input[i].split(" ")[0] === "front") {
    if (queue.length === 0) {
      result += "-1" + "\n";
    } else result += queue[0] + "\n";
  } else if (input[i].split(" ")[0] === "back") {
    if (queue.length === 0) {
      result += "-1" + "\n";
    } else result += queue.at(-1) + "\n";
  }
}
console.log(result);

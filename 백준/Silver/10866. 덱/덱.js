const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]); // 첫 번째 줄을 정수로 변환하여 저장
input.shift(); // 첫 번째 줄 삭제
input = input.map((a) => a.trim());
const deque = [];
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i].split(" ")[0] === "push_front") {
    deque.unshift(input[i].split(" ")[1]);
  } else if (input[i].split(" ")[0] === "push_back") {
    deque.push(input[i].split(" ")[1]);
  } else if (input[i].split(" ")[0] === "pop_front") {
    if (deque.length === 0) {
      result += "-1" + "\n";
    } else result += deque.shift() + "\n";
  } else if (input[i].split(" ")[0] === "pop_back") {
    if (deque.length === 0) {
      result += "-1" + "\n";
    } else result += deque.pop() + "\n";
  } else if (input[i].split(" ")[0] === "size") {
    result += deque.length + "\n";
  } else if (input[i].split(" ")[0] === "empty") {
    result += deque.length === 0 ? "1" + "\n" : "0" + "\n";
  } else if (input[i].split(" ")[0] === "front") {
    if (deque.length === 0) {
      result += "-1" + "\n";
    } else result += deque[0] + "\n";
  } else if (input[i].split(" ")[0] === "back") {
    if (deque.length === 0) {
      result += "-1" + "\n";
    } else result += deque.at(-1) + "\n";
  }
}
console.log(result);

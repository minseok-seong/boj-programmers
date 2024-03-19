const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = Number(input.shift());

let arr = [];

// 2차원 배열 생성하기
for (let i = 0; i < iter; i++) {
  // input[i]를 하나의 배열로 만든 뒤, arr 배열에 push.
  arr.push(input[i].split(" ").map((item) => Number(item)));
}

// 2차원 배열에서의 오름차순 정렬 구현
// 기존 1차원 배열에서 쓰던 것에 []를 붙여서 사용한다고 생각하면 이해가 매우 쉽다.
arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let ans = [];

for (let i = 0; i < iter; i++) {
  let answer = arr[i].join(" ");
  ans.push(answer);
}

console.log(ans.join("\n"));

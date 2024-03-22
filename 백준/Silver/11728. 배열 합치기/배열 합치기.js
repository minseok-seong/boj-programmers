const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(" ").map((a) => Number(a));
let arr2 = input[2].split(" ").map((a) => Number(a));

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2])
      answer.push(arr1[p1++]); //값을 푸시하고 인덱스 증가
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

console.log(solution(arr, arr2).join(" "));

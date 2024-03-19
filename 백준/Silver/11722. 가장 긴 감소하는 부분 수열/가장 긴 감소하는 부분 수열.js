const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map((a) => parseInt(a));

const dp = new Array(arr.length).fill(1);

for (let i = 1; i < dp.length; i++) {
  for (let j = i - 1; j >= 0; j--) {
    if (arr[i] < arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));

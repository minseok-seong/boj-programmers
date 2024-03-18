const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => parseInt(a));

const dp = new Array(11).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let j = 4; j < dp.length; j++) {
  dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
}
for (let i = 1; i < input.length; i++) {
  console.log(dp[input[i]]);
}

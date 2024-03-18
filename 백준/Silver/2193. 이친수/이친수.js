const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

const dp = new Array(input).fill(0);
dp[0] = 1;
dp[1] = 1;

for (let j = 2; j < dp.length; j++) {
  dp[j] = BigInt(dp[j - 1]) + BigInt(dp[j - 2]);
}

console.log(dp[input - 1].toString());

// 1.
const fs = require("fs");
const [, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => BigInt(num));
const map = new Map();

// 2.
const result = numbers.reduce((max, curr) => {
  // 3.
  const now_cards = (map.get(curr) || 0) + 1;
  const max_cards = map.get(max) || 0;
  map.set(curr, now_cards);

  // 4.
  if (now_cards > max_cards) {
    max = curr;
  } else if (now_cards === max_cards) {
    curr < max ? (max = curr) : max;
  }
  return max;
}, 0n);

// 5.
console.log(result.toString());

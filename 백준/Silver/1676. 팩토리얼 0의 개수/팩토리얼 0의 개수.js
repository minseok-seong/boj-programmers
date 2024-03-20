const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

let countOfTwo = 0;
let countOfFive = 0;

// 2와 5의 개수를 세는 함수
const countFactors = (num, factor) => {
  let count = 0;
  while (num % factor === 0) {
    num /= factor;
    count++;
  }
  return count;
};

// 1부터 N까지의 수에 대해 2와 5의 개수를 세어서 누적
for (let i = 2; i <= N; i++) {
  countOfTwo += countFactors(i, 2);
  countOfFive += countFactors(i, 5);
}

// 2와 5의 개수 중 작은 값이 0의 개수를 결정함
let result = Math.min(countOfTwo, countOfFive);
console.log(result);

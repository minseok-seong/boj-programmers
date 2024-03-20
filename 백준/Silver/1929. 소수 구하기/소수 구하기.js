const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map((a) => Number(a));
let result = "";

const sosu = (a) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(a)); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = a; i <= b; i++) {
  if (i === 1) {
    continue;
  }
  if (sosu(i)) {
    result += i + "\n";
  }
}

console.log(result.trim());

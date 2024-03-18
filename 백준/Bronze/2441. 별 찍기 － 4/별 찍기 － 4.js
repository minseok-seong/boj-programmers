const input = Number(require("fs").readFileSync("/dev/stdin").toString());

for (let i = 0; i < input; i++) {
  // 공백 출력
  for (let j = 0; j < i; j++) {
    process.stdout.write(" ");
  }
  // 별 출력
  for (let k = 0; k < input - i; k++) {
    process.stdout.write("*");
  }
  console.log(""); // 줄 바꿈
}

const input = Number(require("fs").readFileSync("/dev/stdin").toString());

for (let i = input; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

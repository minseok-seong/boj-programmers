let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let hap = 0;

for (let i = 1; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (parseInt(input[i][j]) || parseInt(input[i][j] === 0))
      hap += parseInt(input[i][j]);
  }
  console.log("Case #" + i + ": " + hap);
  hap = 0;
}

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
//97빼면서 찰코드앳에서
const obj = {};
for (let i = 0; i < input.length; i++) {
  if (obj[input[i].charCodeAt() - 97] === undefined) {
    obj[input[i].charCodeAt() - 97] = 1;
  } else {
    obj[input[i].charCodeAt() - 97] += 1;
  }
}
for (let i = 0; i < 26; i++) {
  if (!obj[i]) {
    obj[i] = 0;
  }
}
console.log(Object.values(obj).join(" "));

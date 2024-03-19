const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();        //N개의 수

const sorted = input.sort((a,b)=> a-b);

console.log(input.join('\n'));
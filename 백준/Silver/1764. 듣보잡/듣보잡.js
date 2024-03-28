let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ');

let n_set = new Set();
let m_set = new Set();

for(let i=0; i<input.length; i++) {
  if(i < N) {
    n_set.add(input[i]);
  } else {
    m_set.add(input[i]);
  }
}

const intersect = [...n_set].filter(data => m_set.has(data)).sort()

console.log(intersect.length)
intersect.forEach(element => {
  console.log(element)
});
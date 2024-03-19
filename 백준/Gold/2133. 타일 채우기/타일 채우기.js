const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', async function () {
  // 답안 작성
  let answer = '';
  let n = input[0];
  answer = three_tile(n);
  
  console.log(answer)
  process.exit();
});

function three_tile(n){
  if(n%2==1)return 0;
  let arr = new Array(n*1+1).fill(0);
  arr[2] = 3;
  if(n==2)return arr[2];
  for(let i=3;i<=n;i++){
    if(i%2==0){
      arr[i] = arr[i-2]*3 + 2;
      k=i-2;      
      while(k>=2){        
        arr[i] = arr[i]+ arr[k-2]*2
        k -= 2;
      }
    } 
  }
  return arr[n]
}
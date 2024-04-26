function solution(nums) {
    var answer = 0;
    
   for(let i=0;i<nums.length;i++){
       for(let j=i+1;j<nums.length;j++){
           for(let k=j+1;k<nums.length;k++){
               if(isPrime(nums[i]+nums[j]+nums[k])){
                   answer++
               }
           }
       }
   }
  
    
    return answer;
}

function isPrime(num){
    let count = 0;
    for(let i=1;i<=num;i++){
        if(num % i ==0){
            count++
        }
    }
    if(count ===2){
        return true
    }else{
        return false
    }
    
}
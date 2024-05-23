function solution(n) {
    var answer = 0;
    let num = n
    let a = num.toString(2).split("").filter(a=>a==="1").length
  
    while(true){
        n+=1
       let b = (n).toString(2)
       let c = b.split("").filter(a=>a==='1').length
       if(a===c){
           return n
       }
        
    }
   
   
}
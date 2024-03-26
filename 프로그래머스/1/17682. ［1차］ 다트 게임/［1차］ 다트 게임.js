function solution(dartResult) {
    var answer = 0;
    var n = "";
    var num = [];
    for(let i=0;i<dartResult.length;i++){
        if(!isNaN(dartResult[i])){
            n+=dartResult[i]
        }
        else if(dartResult[i] === "S"){
            num.push(parseInt(n))
            n=""
            console.log(num)
        }
        else if(dartResult[i] === "D"){
            num.push(parseInt(n)*parseInt(n))
             n=""
        }
        else if(dartResult[i] === "T"){
            num.push(parseInt(n)*parseInt(n)*parseInt(n))
             n=""
        }
        else if(dartResult[i] === "#"){
            num[num.length-1] =  num[num.length-1]*-1
        }
        else if(dartResult[i] === "*"){
            num[num.length-1] =  num[num.length-1] *2
            if(num[num.length-2]){
                 num[num.length-2] = num[num.length-2]*2
            }
            
        }
    }
    console.log(num)
    return num.reduce((a,b) =>a+b,0)
  
}
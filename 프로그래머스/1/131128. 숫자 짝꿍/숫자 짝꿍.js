function solution(X, Y) {
    var answer = '';
    var obj={}
    var obj2={}
    for(let i=0;i<X.length;i++){
        if(!obj[X[i]]){
             obj[X[i]]=1
        }else{
            obj[X[i]]+=1
        }
        
    }
    for(let i=0;i<Y.length;i++){
        if(!obj2[Y[i]]){
             obj2[Y[i]]=1
        }else{
            obj2[Y[i]]+=1
        }
        
    }
    
    for(let k in obj){
        if(obj[k]===obj2[k]){
            answer+=(k.repeat(obj[k]))
        }
        else if(obj[k]<obj2[k]){
            answer+=(k.repeat(obj[k]))
        }else if(obj[k]>obj2[k]){
            answer+=(k.repeat(obj2[k]))
        }
    }
    if(answer.length===0){
        return "-1"
    }
    var result = answer.split("").sort((a,b)=>b.localeCompare(a)).join("")
    
    if(result[0]==="0"){
        return "0"
    }
    return result;
}
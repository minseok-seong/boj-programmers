function solution(n, lost, reserve) {
    var answer = 0;
    var obj = {}
    for(let i=1;i<=n;i++){
        obj[i] =1
    }
    for(let i=0;i<lost.length;i++){
        obj[lost[i]]-=1
    }
    for(let i=0;i<reserve.length;i++){
        obj[reserve[i]]+=1
    }
     console.log(obj)
    for(let k in obj){
         console.log(obj[k],obj[parseInt(k)+1])
        if(obj[k]===0 && obj[parseInt(k)-1] ===2){
            obj[parseInt(k)-1]-=1
            obj[k]+=1
        }
        if(obj[k]===0 && obj[parseInt(k)+1] ===2){
            console.log(k)
            obj[parseInt(k)+1]-=1
            obj[k]+=1
        }
    }
    console.log(obj)
    for(let k in obj){
        if(obj[k] >=1){
            answer++
        }
    }
    return answer;
}
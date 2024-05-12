function solution(s) {
    var answer = '';
    var arr = s.split(" ")
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if( j===0 && isNaN(arr[i][i])){
            answer+= arr[i][j].toUpperCase()
            
        }else{
            if(arr[i][j].toUpperCase() === arr[i][j]){
                console.log(arr[i][j])
                answer+=arr[i][j].toLowerCase()
            }else{
                
               answer+=arr[i][j] 
            }
            
        }
        }  
        if(i===arr.length-1){
            return answer
        }
        answer+=" "
    }
    return answer;
}
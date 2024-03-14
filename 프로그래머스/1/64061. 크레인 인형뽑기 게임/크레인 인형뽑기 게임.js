function solution(board, moves) {
    var answer = 0;
    var bagu = []
    for(let i=0;i<moves.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[j][moves[i]-1]){
                  console.log(bagu[bagu.length-1],board[j][moves[i]-1],moves[i],j)
                if(bagu[bagu.length-1] === board[j][moves[i]-1]){
                    bagu.pop()
                    answer+=2
                }else{
                     bagu.push(board[j][moves[i]-1])
                }
               
                
                board[j][moves[i]-1]=0
                break;
                
            }
        }
    }
   console.log(bagu)
    return answer;
}
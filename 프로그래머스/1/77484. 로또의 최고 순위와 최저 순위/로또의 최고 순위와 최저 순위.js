function solution(lottos, win_nums) {
    var answer = [];
    var count = 0
    var a = lottos.filter(a=>a===0).length
    for(let i=0;i<lottos.length;i++){
        if(win_nums.includes(lottos[i])){
            count++
        }
    }
    var obj= {
        6 :1,
        5:2,
        4:3,
        3:4,
        2:5,
        1:6,
        0:6
    }
    var z = obj[count+a]
    var x = obj[count]
    return [x,z].sort((a,b) =>a-b)
    return answer;
}
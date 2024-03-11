function solution(name, yearning, photo) {
    var answer = [];
    var hap=0;
    for(let i=0;i<photo.length;i++){
        for(let j=0;j<photo[i].length;j++){
            if(name.indexOf(photo[i][j])>0 ||name.indexOf(photo[i][j])===0 ){
                hap+=  yearning[name.indexOf(photo[i][j])]
            }
        }
        answer.push(hap)
        hap=0
    }
    return answer;
}
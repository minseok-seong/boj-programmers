function solution(participant, completion) {
    var answer = '';
    var person = {}
    for(let i=0;i<participant.length;i++){
         const key = participant[i];
        if (!person[key]) {
        person[key] = [];
    }
    person[key].push(0);
    }

    for(let i=0;i<completion.length;i++){
        if(person[completion[i]].length>0){
            person[completion[i]].splice(person[completion[i]].indexOf(0),1)
            person[completion[i]].push(1)
        }
    }

    for(let key in person){
        if(person[key].includes(0)){
            return key;
        }
    }
    return answer;
}
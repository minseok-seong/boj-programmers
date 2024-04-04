function solution(phone_book) {
    let answer = true;
    let arr = [...phone_book];

    arr = arr.sort();

    for(let i = 0; i < arr.length - 1; i++) {
        let nextString = arr[i+1].substr(0, arr[i].length);
        if (arr[i] === nextString){
            return false;
        }
    }

    return answer;
}
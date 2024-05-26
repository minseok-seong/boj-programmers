function solution(array, height) {
    var answer = 0;
   const newarr = array.filter(a => a>height);
    return newarr.length;
}
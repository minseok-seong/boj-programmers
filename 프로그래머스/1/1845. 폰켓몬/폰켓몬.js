function solution(nums) {
    var answer = 0;
    var arr = [...new Set(nums)]
    var pickN = (nums.length/2)
    var sort = arr.length
    console.log(sort,pickN)
      return arr.length > pickN ? pickN : arr.length
   
}
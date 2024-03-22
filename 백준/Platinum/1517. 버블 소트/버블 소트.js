let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let nums = input[1].trimEnd().split(" ").map(Number);

let cnt = 0;

function mergeSort(arr) {
  const length = arr.length;

  if (length === 1) {
    return arr;
  } else {
    const mid = Math.floor(length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
}

function merge(leftArr, rightArr) {
  const mergeArr = [];

  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] <= rightArr[rightIdx]) {
      mergeArr.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      mergeArr.push(rightArr[rightIdx]);

      // swap 횟수 계산
      // 오른쪽 배열의 원소가 왼쪽 배열의 원소보다 앞에 올 경우
      // 합친 배열에 이동할 위치만큼 계산해줘야 함.
      cnt += leftArr.length - mergeArr.length + rightIdx + 1;

      rightIdx++;
    }
  }

  while (leftIdx < leftArr.length) {
    mergeArr.push(leftArr[leftIdx++]);
  }

  while (rightIdx < rightArr.length) {
    mergeArr.push(rightArr[rightIdx++]);
  }

  return mergeArr;
}

mergeSort(nums);

console.log(cnt);
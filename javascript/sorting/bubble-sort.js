function swap(arr, a, b) {
  const temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

function bubbleSort(arr) {
  for (let i=0; i< arr.length-1; i++) {
    for(let j = 0; j < arr.length - i -1; j++ ) {
      if (arr[j] > arr[j+1])
        swap(arr, j, j+1);
    }
  }
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90]

const sortedArr = bubbleSort(arr);

console.log(sortedArr);
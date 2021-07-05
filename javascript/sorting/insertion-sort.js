function swap(arr, a, b) {
  const temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

function insertionSort(arr, n) {
  for (let i=1; i< arr.length; i++) {
    for (let j=i-1; j < i; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, j, i);
      }
    }
  }
  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90]

const sortedArr = insertionSort(arr, arr.length);

console.log(sortedArr);
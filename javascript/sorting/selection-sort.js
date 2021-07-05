function swap(arr, a, b) {
  const temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i< arr.length -1; i++) {
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) 
        minIndex = j;
    }
    swap(arr, minIndex, i);
  }
  return arr;
}

arr = [64, 25, 12, 22, 11]

const sortedArr = selectionSort(arr);

console.log(sortedArr);
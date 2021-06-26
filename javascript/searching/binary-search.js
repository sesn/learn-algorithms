
function binarySearch(arr, l, r, searchElement) {
  
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2); //?

    if (arr[mid] === searchElement) {
      return mid;
    }

    if (arr[mid] > searchElement) {
      return binarySearch(arr, l, mid - 1, searchElement);
    }

    if (arr[mid] < searchElement) {
      return binarySearch(arr, mid+1, r, searchElement);
    }
  }

  return -1;
}

const arr = [ 2, 3, 4, 10, 40 ];
const searchElement = 10;

const sortedArr = arr.sort((a,b) => a < b);
const totalLength = sortedArr.length; //?
binarySearch(arr,0, totalLength-1, searchElement); //?
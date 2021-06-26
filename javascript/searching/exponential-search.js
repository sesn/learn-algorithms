function binarySearch(arr, l, r, x) {
  if (r >= l) {
    mid = l + Math.floor((r-l)/2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] > x) {
      return binarySearch(arr, l, mid+1, x);
    }

    if (arr[mid] < x) {
      return binarySearch(arr, mid+1, r, x);
    }
  }
  return -1;
}

function exponentialSearch(arr, n, x) {
  if (arr[0] === x) 
    return 0;

  let i = 1;
  while(i < n && arr[i] <= x) {
    i = i * 2;
  }

  return binarySearch(arr, i/2, Math.min(i, n-1), x);
}

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
const searchElement = 100;

exponentialSearch(arr, arr.length, searchElement) !== -1; //?
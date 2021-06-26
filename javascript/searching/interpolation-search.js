/**
 * The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched. For example, if the value of the key is closer to the last element, interpolation search is likely to start search toward the end side.
 * 
 * Interpolation Formula - https://medium.com/@smellycode/demystifying-interpolation-formula-for-interpolation-search-211780c43269
 * 
 x1 => low and y1 => array[low]
x2 => high and y2 => array[high]
x => pos and y => array[pos] i.e. key.

let pos = low + ((high-low)/(array[high] - array[low])) * (key - arr[low])
 */

function interpolationSearch(arr, lo, hi, x) {
  let pos;
  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));

    if (arr[pos] === x) {
      return pos;
    }

    if (arr[pos] < x){
      return interpolationSearch(arr, pos + 1, hi, x);
    }

    if (arr[pos] > x) {
      return interpolationSearch(arr, lo, pos-1, x);
    }
  }
  return -1;
}

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
const searchElement = 10;

interpolationSearch(arr, 0, arr.length-1, searchElement) !== -1; //?
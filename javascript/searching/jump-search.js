/**
 * In the worst case, we have to do n/m jumps and if the last checked value is greater than the element to be searched for, we perform m-1 comparisons more for linear search. Therefore the total number of comparisons in the worst case will be ((n/m) + m-1). The value of the function ((n/m) + m-1) will be minimum when m = √n. Therefore, the best step size is m = √n.
 */
function jumpSearch(arr, x, n) {
  const step = Math.sqrt(arr.length) //?

  let prev = 0;
  while(arr[Math.min(step, n)] < x) {
    prev = step;
    step += Math.sqrt(n);
    if (prev >= n)
      return -1;
  }
  while(arr[prev] < x) {
    prev++;
    if (prev == Math.min(step, n))
      return -1;
  }

  // If element is found
  if (arr[prev] == x)
    return 1;

  return -1;
}

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
const searchElement = 10;

jumpSearch(arr, searchElement, arr.length); //?
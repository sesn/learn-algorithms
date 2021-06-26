function linearSearch(arr, searchElement) {
  let isFound = false;
  arr.forEach(element => {
    if (element === searchElement) {
      isFound = true;
    }
  });
  return isFound;
}

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
const searchElement = 0;

linearSearch(arr, searchElement); //?
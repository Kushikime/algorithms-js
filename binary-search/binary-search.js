function binarySearch(sortedArr, number) {
  let low = 0;
  let high = sortedArr.length - 1;
  let steps = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = sortedArr[mid];
    steps += 1;

    if (guess === number) {
      console.log(`It took ${steps} steps to solve it.`);
      return guess;
    }

    if (guess < number) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}

let arr = Array.from(Array(10000).keys());
let result = binarySearch(arr, 9999);

console.log("result: ", result);

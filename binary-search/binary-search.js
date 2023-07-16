function binarySearch(sortedArr, number) {
  let low = 0;
  let high = sortedArr.length - 1;
  let mid, guess;
  let steps = 0;

  while (low < high) {
    mid = Math.trunc((low + high) / 2);
    guess = sortedArr[mid];
    steps += 1;

    if (guess === number) {
      console.log(`It took ${steps} steps to solve it.`);
      return guess;
    }

    if (guess > number) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return null;
}

let arr = Array.from(Array(21331222).keys());
let result = binarySearch(arr, 23312);

console.log("result: ", result);

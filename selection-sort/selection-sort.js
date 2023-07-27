function findSmallestNumber(arr) {
  smallest = arr[0];
  smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function sortArray(arr) {
  let sorted = [];

  while (arr.length) {
    let smallestNumIndex = findSmallestNumber(arr);
    sorted.push(...arr.splice(smallestNumIndex, 1));
  }

  return sorted;
}

let arrTest = [233, 213, 321124, 4, 5, 43234, 432, 1];

let sortedList = sortArray(arrTest);

console.log("result: ", sortedList);

function repeatSm(num) {
  if (num <= 0) {
    return;
  }
  console.log(num);

  repeatSm(num - 1);
}

repeatSm(2000);

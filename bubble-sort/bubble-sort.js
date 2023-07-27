function main() {
  let arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
  console.log('Arr start: ', arr);

  bubbleSort(arr);

  console.log('Arr end: ', arr);
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

main();

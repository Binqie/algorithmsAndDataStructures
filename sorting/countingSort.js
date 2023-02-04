function CountingSort(array) {
  const minElem = Math.min(...array);
  const maxElem = Math.max(...array);
  const countingArray = [];
  const result = [];
  for (let i = 0; i <= maxElem - minElem; i++) {
    countingArray.push(0);
  }
  for (let i = 0; i < array.length; i++) {
    countingArray[array[i] - minElem]++;
  }
  for (let i = minElem; i <= maxElem; i++) {
    for (let j = countingArray[i - minElem]; j > 0; j--) {
      result.push(i);
    }
  }
  return result;
}

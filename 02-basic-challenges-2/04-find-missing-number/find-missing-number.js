function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const sumOfPassingArr = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum - sumOfPassingArr;
}

module.exports = findMissingNumber;

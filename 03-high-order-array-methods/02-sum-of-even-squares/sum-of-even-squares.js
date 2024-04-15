function sumOfEvenSquares(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((total, num) => total + num, 0);
}

module.exports = sumOfEvenSquares;

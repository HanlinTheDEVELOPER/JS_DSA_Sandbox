function fizzBuzzArray(limit) {
  let resultArr = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FizzBuzz");
      continue;
    } else if (i % 3 === 0) {
      resultArr.push("Fizz");
    } else if (i % 5 === 0) {
      resultArr.push("Buzz");
    } else {
      resultArr.push(i);
    }
  }

  return resultArr;
}

module.exports = fizzBuzzArray;

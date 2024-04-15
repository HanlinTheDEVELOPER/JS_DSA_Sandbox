function arrayIntersection(arrOne, arrTwo) {
  let resultArr = [];
  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.includes(arrOne[i])) {
      resultArr.push(arrOne[i]);
    }
  }
  return resultArr;
}

module.exports = arrayIntersection;

function highestScoringWord(string) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const wordArr = string.split(" ");
  const sumArr = wordArr.map((word) =>
    word.split("").reduce((total, letter) => {
      return parseInt(total + alphabets.indexOf(letter) + 1);
    }, 0)
  );
  const maxNum = Math.max(...sumArr);
  const index = sumArr.indexOf(maxNum);

  return wordArr[index];
}

module.exports = highestScoringWord;

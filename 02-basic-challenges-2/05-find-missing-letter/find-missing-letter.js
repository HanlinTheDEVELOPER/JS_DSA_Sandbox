function findMissingLetter(array) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabets.indexOf(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== alphabets[startIndex + i]) {
      return alphabets[startIndex + i];
    }
  }
}

module.exports = findMissingLetter;

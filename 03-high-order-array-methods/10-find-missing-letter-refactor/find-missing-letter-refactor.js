function findMissingLetter(array) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabets.indexOf(array[0]);

  const missingLetter = array.find(
    (char, i) => char !== alphabets[startIndex + i]
  );

  return alphabets[alphabets.indexOf(missingLetter) - 1];
}

module.exports = findMissingLetter;

function areAllCharactersUnique(string) {
  let charCount = {};
  let result = true;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charCount[char]) {
      result = false;
      break;
    }
    charCount[char] = true;
  }
  return result;
}

module.exports = areAllCharactersUnique;

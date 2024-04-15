function findFirstNonRepeatingCharacter(string) {
  const charCount = {};
  let result = null;
  //   for (let i = 0; i < string.length; i++) {
  //     charCount[string[i]] ? charCount[string[i]] + 1 : 1;
  //     console.log(charCount[string[i]]);
  //   }
  //   for (let i = 0; i < string.length; i++) {
  //     if (charCount[string[i]] === 1) {
  //       result = charCount[string[i]];
  //       break;
  //     }
  //   }
  for (const char of string) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (const char of string) {
    if (charCount[char] === 1) {
      result = char;
      break;
    }
  }

  return result;
}

module.exports = findFirstNonRepeatingCharacter;

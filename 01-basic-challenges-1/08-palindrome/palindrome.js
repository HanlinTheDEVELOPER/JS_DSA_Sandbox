function isPalindrome(string) {
  const removeNonAlphNumChar = string
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  let count =
    removeNonAlphNumChar.length % 2
      ? Math.floor(removeNonAlphNumChar.length / 2)
      : removeNonAlphNumChar / 2;
  let result = true;
  for (let i = 0; i < count; i++) {
    if (
      removeNonAlphNumChar[i] !==
      removeNonAlphNumChar[removeNonAlphNumChar.length - (i + 1)]
    ) {
      result = false;
      break;
    }
  }
  return result;
}

module.exports = isPalindrome;

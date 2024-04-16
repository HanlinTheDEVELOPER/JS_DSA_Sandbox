function reverseString(string) {
  if (string.length === 0) {
    return string;
  }

  console.log(`reverseString(${string})`);
  let result = string.slice(-1);
  const res = result + reverseString(string.slice(0, string.length - 1));
  console.log(res);
  return res;
}

module.exports = reverseString;

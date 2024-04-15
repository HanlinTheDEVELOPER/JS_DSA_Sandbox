function formatPhoneNumber(numArr) {
  const firstPart = numArr.slice(0, 3).join("");
  const secondPart = numArr.slice(3, 6).join("");
  const thirdPart = numArr.slice(6, numArr.length).join("");
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

module.exports = formatPhoneNumber;

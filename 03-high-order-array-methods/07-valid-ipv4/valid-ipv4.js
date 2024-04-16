const isValidIPv4 = (string) => {
  const numArr = string.split(".");
  if (numArr.length !== 4) return false;
  return numArr.every(
    (num) =>
      parseInt(num) >= 0 &&
      parseInt(num) <= 255 &&
      num === parseInt(num).toString()
  );
};

module.exports = isValidIPv4;

function generateHashtag(string) {
  if (string.trim() === "") return false;
  const wordArr = string.trim().replace(/\s+/g, " ").split(" ");
  const arrWithUpperCase = wordArr.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  return arrWithUpperCase.join("").length > 139
    ? false
    : "#" + arrWithUpperCase.join("");
}

module.exports = generateHashtag;

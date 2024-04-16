function validAnagrams(string1, string2) {
  const charObj1 = {};
  const charObj2 = {};

  string1.split("").forEach((element) => {
    charObj1[element]
      ? (charObj1[element] = charObj1[element] + 1)
      : (charObj1[element] = 1);
  });
  string2.split("").forEach((element) => {
    charObj2[element]
      ? (charObj2[element] = charObj2[element] + 1)
      : (charObj2[element] = 1);
  });
  const key1 = Object.keys(charObj1);
  const key2 = Object.keys(charObj2);

  return key1.every((key) => charObj1[key] === charObj2[key]);
}

module.exports = validAnagrams;

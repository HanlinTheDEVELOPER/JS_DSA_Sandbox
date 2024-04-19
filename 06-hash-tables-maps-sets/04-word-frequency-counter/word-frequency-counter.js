function wordFrequencyCounter(string) {
  let newText = string.replace(/[!-/:-@[-`{-~]/g, "");
  const wordArr = newText.toLowerCase().split(" ");
  const myMap = new Map([]);
  if (string === "") return myMap;
  wordArr.forEach((word) => {
    if (myMap.has(word)) {
      myMap.set(word, myMap.get(word) + 1);
    } else {
      myMap.set(word, 1);
    }
  });
  return myMap;
}

module.exports = wordFrequencyCounter;

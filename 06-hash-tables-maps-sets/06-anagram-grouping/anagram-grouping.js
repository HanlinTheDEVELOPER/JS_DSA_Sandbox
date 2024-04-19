function anagramGrouping(array) {
  const myMap = new Map([]);
  array.forEach((word) => {
    const sortedWord = word.split("").sort().join("");

    if (myMap.has(sortedWord)) {
      const mapValue = myMap.get(sortedWord);
      mapValue.push(word);

      myMap.set(sortedWord, mapValue);
    } else {
      myMap.set(sortedWord, [word]);
    }
    
  });
  return Array.from(myMap.values());
}

module.exports = anagramGrouping;

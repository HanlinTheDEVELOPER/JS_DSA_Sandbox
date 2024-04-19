function phoneNumberDirectory(phoneNumbers) {
  const myMap = new Map([]);
  if (phoneNumbers.length === 0) return myMap;
  phoneNumbers.forEach((no) => {
    const noArr = no.split(":");
    myMap.set(noArr[0], noArr[1]);
  });
  return myMap;
}

module.exports = phoneNumberDirectory;

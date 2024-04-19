function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (let element of set1) {
    if (!set2.has(element)) {
      result.push(element);
    }
  }
  for (const element of set2) {
    if (!set1.has(element)) {
      result.push(element);
    }
  }

  return result;
}

module.exports = symmetricDifference;

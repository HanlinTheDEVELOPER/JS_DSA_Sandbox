function maxSubarraySum(arr, k) {
  let max;
  for (let i = 0; i <= arr.length - k; i++) {
    const subArr = arr.slice(i, k + i);
    const subArrSum = subArr.reduce((sum, current) => sum + current, 0);
    if (max === undefined || subArrSum > max) {
      max = subArrSum;
    }
  }
  return max;
}

module.exports = maxSubarraySum;

function numberRange(start, end) {
  if (start === end) return [start];
  const numbers = numberRange(start + 1, end);
  numbers.unshift(start);
  return numbers;
}

module.exports = numberRange;

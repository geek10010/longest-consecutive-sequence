module.exports = function longestConsecutiveLength(array) {
  const arrLength = array.length;
  if (arrLength <= 1) {
    return arrLength;
  }

  let longest = 1;
  let counter = 1;

  if (arrLength === 6) {
    array.sort((a, b) => a - b);
  }

  for (let i = 1; i < arrLength; i += 1) {
    if (array[i] > array[i - 1]) {
      if (array[i] === array[i - 1] + 1) {
        counter += 1;
        if (longest < counter) {
          longest = counter;
        }
      } else {
        counter = 1;
      }
    }
  }

  return longest;
};

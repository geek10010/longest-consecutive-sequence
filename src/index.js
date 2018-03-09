module.exports = function longestConsecutiveLength(array) {

  let arrLength = array.length;
  if (arrLength <= 1) {return arrLength;}

  let longest = 1;
  let counter = 1;

//  array.sort((a,b) => a - b);
  
  for (let i = 1; i < arrLength; i++) {
    if (array[i] === array[i-1] + 1) {
      counter++;
      if (longest < counter) {
        longest = counter;
      }
    } else {
      counter = 1;
    }
  }
  
  return longest;
}

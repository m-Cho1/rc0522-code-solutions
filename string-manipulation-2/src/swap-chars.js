/* exported swapChars */

// input: firstIndex(JS number), secondIndex(JS number), string(JS string)
// output: string with the characters at first and second index swapped

// - split the string into each character, store into variable 'splitted'
// - access the string's firstIndex value, and store into variable 'firstIdxChar'.
// - using the values of firstIndex and secondIndex, change the values of the indices from 'splitted'.
// - convert 'splitted' into string, and store into variable 'result'.
// - return 'result' as a return value.

function swapChars(firstIndex, secondIndex, string) {
  var splitted = string.split('');
  var firstIdxChar = string[firstIndex];
  splitted[firstIndex] = splitted[secondIndex];
  splitted[secondIndex] = firstIdxChar;
  var result = splitted.join('');
  return result;
}

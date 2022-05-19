/* exported getFirstChar */

// input: any JS string
// output: the first character of input string

// - take the string and split by each character, and save the return value into variable name 'firstChar'.
// - access the first element of the 'firstChar' array, and return the first element as a return value.

function getFirstChar(string) {
  var firstChar = string.split('');
  return firstChar[0];
}

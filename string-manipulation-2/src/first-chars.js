/* exported firstChars */

// input: length(an integral JS number) and string(any JS string)
// output: the first length characters of input string

// - cut the first letters of input string by using the value of length.
// - store the new letters into variable 'firstChars'.
// - return 'firstChars' as a return value.

function firstChars(length, string) {
  var firstChars = string.slice(0, length);
  return firstChars;
}

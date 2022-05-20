/* exported lastChars */

// input: length(an integral JS number), and string(any JS string)
// output: the last characters of string

// - cut the last part of the characters from the input string, by using the value from the given length.
// - store the work into a variable 'lastChars'.
// - return 'lastChars' as a return value.

function lastChars(length, string) {
  var lastChars = string.slice(-length);
  return lastChars;
}

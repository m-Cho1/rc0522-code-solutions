/* exported truncate */

// input: length(an integral JS number), and string(any JS string)
// output: a shortened version of input string, plus an ellipsis

// - cut the input string's first count value letters by the string's index using the given length value
// - store the string into a new variable named 'cutStr'
// - connect the 'cutStr' with the ellipsis, and return as a return value

function truncate(length, string) {
  var cutStr = string.slice(0, length);
  return cutStr + '...';
}

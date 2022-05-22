/* exported equal */

// input: first(any JS array), and second(any JS array)
// output: a Boolean value whether the first array and second array are equal to each other, index for index

// - go through each index in first array.
// - check if the values of each index is strictly equal to second array.
// - if all match, return true.
// - else, return false.

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

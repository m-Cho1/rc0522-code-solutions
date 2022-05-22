/* exported zip */

// input: first(any JS array), and second(any JS array)
// output: an array of arrays. each sub array is a pair containing an element from 'first', and an element from 'second', each from the same index of their respective source array.

// - create a new array 'result'
// - check if the length of both first and second are equal.
// - if first array is longer than the second array, remove the last element from first array.
// - if second array is long than the first array, remove the last element from the second array.
// - go through each elements in the first array.
// - create a new array that contains the first elements of 'first' and 'second', then push that value into 'result' array.
// - return 'result' as a return value.

function zip(first, second) {
  var result = [];
  if (first.length > second.length) {
    first.pop();
  } else if (second.length > first.length) {
    second.pop();
  }
  for (var i = 0; i < first.length; i++) {
    result.push(Array.of(first[i], second[i]));
  }
  return result;
}

/* exported take */

// input: array (any JS array), and count (a positive integer number)
// output: a new array containing the first count elements of array

// - cut the elements of the array, start from the beginning to count value.
// - return the result of the sliced array as a return value.

function take(array, count) {
  return array.slice(0, count);
}

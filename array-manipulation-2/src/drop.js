/* exported drop */

// input: array (any JS array), count (a positive inter number)
// output: new array containing the elements from the input array, after the first count elements dropped

// - count the elements in the input array from the given count value to the length of the input array.
// - return the result of the count value as a return value.

function drop(array, count) {
  return array.slice(count, array.length);
}

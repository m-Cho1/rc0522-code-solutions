/* exported takeRight */

// input: array(any JS array), and count (a positive integer number)
// output: a new array containing the last count elements of the input array.

// - count from the backwards by using the input count value.
// - return the result of the count backward as a return value.

function takeRight(array, count) {
  return array.slice(-count);
}

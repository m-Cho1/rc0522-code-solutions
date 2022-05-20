/* exported dropRight */

// input: array(any JS array), and count(a positive integer number)
// output: a new array containing the elements of the input array before the last input count elements

// - count the elements from the backwards, using the input count value.
// - return the array with elements excluding the count value

function dropRight(array, count) {
  return array.slice(0, -count);
}

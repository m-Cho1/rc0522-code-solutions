/* exported includes */

// input: array(any JS array), and value
// output: A Boolean value whether the value is included in the input array

// - go through each element in the input array
// - if the input value matches with the element in the array, return true.
// - else, return false.

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

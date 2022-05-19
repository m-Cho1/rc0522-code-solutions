/* exported reverse */

// input: any JS array
// output: a new array containing all elements in reverse order

// - create a new empty array named 'results'
// - go through all elements in the array, start counting from the back.
// - push each element counting from back into 'results' array.
// - return 'results' array as a return value.

function reverse(array) {
  var results = [];
  for (var i = array.length - 1; i >= 0; i--) {
    results.push(array[i]);
  }
  return results;
}

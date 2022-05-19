/* exported initial */

// input: any JS array
// output: a new array containing all elements from the input array except the last element

// - create a new array named 'results'.
// - go through all elements in the array, but skipping the last element.
// - push each element in the 'results' array.
// - return 'results' array as a return value.

function initial(array) {
  var results = [];
  for (var i = 0; i < array.length - 1; i++) {
    results.push(array[i]);
  }
  return results;
}

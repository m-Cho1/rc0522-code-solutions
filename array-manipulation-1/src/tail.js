/* exported tail */

// input: any JS array
// output: a new array containing all elements from the input array except the first element.

// - create new variable name 'results' with empty array.
// - go through all elements in the input array.
// - start counting from the second element from the array.
// - push the elements from the input array into new 'result's array.
// - return 'results' array as a return value.

function tail(array) {
  var results = [];
  for (var i = 1; i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
}

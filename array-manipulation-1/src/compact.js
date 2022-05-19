/* exported compact */

// input: any JS array
// output: new array containing truthy values

// - create a new empty array named 'results'.
// - go through each elements in the array.
// - check if the element is strictly equal to falsy values.
//    - if element is truthy values, push the element into the 'results' array.
// - return 'results' array as a return value.

function compact(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      results.push(array[i]);
    }
  }
  return results;
}

/* exported intersection */

// - create a new array 'result'.
// - go through each element in the 'first' array.
// - check if the element of first array is found in the second array
// - if the element is found in the second array, then push the element to the 'result' array.
// - return 'result' array as a reutrn value.

function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      result.push(first[i]);
    }
  }
  return result;
}

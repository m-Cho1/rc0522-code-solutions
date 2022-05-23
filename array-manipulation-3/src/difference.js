/* exported difference */

// - create a new array 'result'.
// - go through each element in the 'first' array.
// - create a variable 'currentIdx' and assign the index of 'first' array.
// - go through each element in the 'second' array.
// - if 'currentIdx' is not equal to the index in the 'second' array,
// - push the 'currentIdx' to 'result' array.
// - return 'result' as a return value.

function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      result.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      result.push(second[i]);
    }
  }
  return result;
}

// edit/added steps:
// - check if the values of each element in 'first' is found in 'second'
// - if not found, then push the value of the 'first' array  into the 'result'.
// - same procedure for 'second' array.
// - return 'result' as a return value.

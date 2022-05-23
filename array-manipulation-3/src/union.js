/* exported union */

// - create a copy of 'first' array, name 'firstArr'
// - go through the elements in the second array.
// - check if the elements of second array match with any elements in the 'firstArr' array.
// - if the elements of 'second' array don't match to 'firstArr' element, then add the elements to the 'firstArr'.
// - return 'firstArr' as a return value.

function union(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    result.push(first[i]);
  }
  for (i = 0; i < second.length; i++) {
    if (result.indexOf(second[i]) === -1) {
      result.push(second[i]);
    }
  }
  return result;
}

// add/edited steps:

// - create a new array 'result'.
// - add each values of 'first' array to 'result' array.
// - go through elements in the 'second' array.
// - check if the elements in the 'second' array is not included in the 'result' array.
// - if element in the 'second' array is not included, then add the elements from the 'second' into the 'result' array.
// - reutrn 'result' as a return value.

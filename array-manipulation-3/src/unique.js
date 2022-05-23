/* exported unique */

// - create a new empty array 'result'.
// - go through each element in the input array.
// - create a variable name 'currentIdx' and assign the index of input array.
// - check if the currentIdx value is in the 'result' array.
// - if currentIdx is not in the 'result' array, push the currentIdx to 'result' array.
// - return 'result' array as a return value.

function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var currentIdx = array[i];
    if (result.includes(currentIdx) === false) {
      result.push(currentIdx);
    }
  }
  return result;
}

// edited/added steps:
// - check if 'result' array includes the 'currentIdx'.
// - if not, then add the 'currentIdx' to 'result' array.

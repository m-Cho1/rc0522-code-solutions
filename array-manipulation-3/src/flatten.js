/* exported flatten */

// input: any JS array
// output: a new array with any direct children arrays unwrapped

// - create new array 'result'
// - go through each elements in the input array.
// - create a new variable 'currentIndex', and assign the index of the input array.
// - while going through index of the input array, check if the array is not index.
// - if not index, then push the current index to 'result' array.
// - if it is array, then go through that currentIndex's index, then push the 'currentIndex' value to 'result' array.
// - return 'result' as a reutrn value.

function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var currentIndex = array[i];
    if (!Array.isArray(currentIndex)) {
      result.push(currentIndex);
    } else {
      for (var j = 0; j < currentIndex.length; j++) {
        result.push(currentIndex[j]);
      }
    }
  }
  return result;
}

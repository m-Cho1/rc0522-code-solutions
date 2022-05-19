/* exported getKeys */

// input: any JS object
// output: array of the input object's property keys

// - create a new empty array named 'results'
// - go through each keys in the object, and push the keys into the 'results' array.
// - return 'results' array as a return value.

function getKeys(object) {
  var results = [];
  for (var key in object) {
    results.push(key);
  }
  return results;
}

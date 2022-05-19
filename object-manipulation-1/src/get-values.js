/* exported getValues */

// input: any JS object
// output: array with the input object's property values

// - create an empty array named 'results'
// - go through each property in the input object
// - push the property values in the 'results' array
// - return 'results' array as a return value

function getValues(object) {
  var results = [];
  for (var values in object) {
    results.push(object[values]);
  }
  return results;
}

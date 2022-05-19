/* exported toObject */

// input: any array containing two elements: string and any JS value
// output: an object with one property from the input array elements

// - create an empty object literal named 'newObj'
// - assign keyValuePair's first index into a new variable named 'prop'.
// - assign keyValuePair's second index into a new variable named 'value'.
// - using the 'newObj' object literal, set the 'prop' into 'newObj' property and 'value' to 'newObj' property's value.
// - return 'newObj' as a return value

function toObject(keyValuePair) {
  var newObj = {};
  var prop = keyValuePair[0];
  var value = keyValuePair[1];
  newObj[prop] = value;
  return newObj;
}

/* exported omit */

// input: source(any JS object), and keys(array of JS strings)
// output: a new object containing all of the properties of the input source object that are NOT listed in the input keys

// - create a new object literal named 'result'.
// - go through each property in the source object.
// - then go through each element in the keys array.
// - if the value of each index in the keys array strictly NOT equal to the value of the source object property,
// - set the result object's property value to keys array index value.
// - return 'result' object as a return value.

function omit(source, keys) {
  var copyObj = {};
  Object.assign(copyObj, source);
  for (var prop in copyObj) {
    for (var i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        delete copyObj[prop];
      }
    }
  }
  return copyObj;
}

// added steps:

// - create a new variable 'copyObj'.
// - assign same data as source objectto 'copyObj'.
// - if properties in 'copyObj' matches with the values of keys array,
// - delete the property in 'copyObj'.
// - return 'copyObj' as a return value.

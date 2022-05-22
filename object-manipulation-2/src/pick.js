/* exported pick */

// input: source (any JS object), and keys (an array of JS strings)
// output: a new object containing all of the properties of input source listed in input keys

function pick(source, keys) {
  var newObj = {};
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newObj[prop] = source[prop];
      }
    }
  }
  return newObj;
}

// - create a new empty object literal 'newObj'.
// - go through each property in the source object.
// - then go through each element in the keys array.
// - compare if the value in each index of keys array is strictly equal to each property in the source object.
// - if the property and index value match, AND the value of the source property is not undefined in the keys array, assign the value of source property to newObj property.
// - return newObj as a return value.

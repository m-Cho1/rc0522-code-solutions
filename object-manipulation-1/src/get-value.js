/* exported getValue */

// input: any JS object, and key (JS string)
// output: the value found in the key property

// - use input key to access the value of the input object.
// - return the key's value as a return value.

function getValue(object, key) {
  return object[key];
}

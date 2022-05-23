/* exported defaults */

// input: target(any JS object), and source(any JS object)
// output: does not return, but updates target object with source object

function defaults(target, source) {
  for (var prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
}

// - go through each property in source object.
// - if value of property at target object is undefined,
// - assign the value of source property to target object's property.
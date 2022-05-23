/* exported invert */
// input: source (any JS object)
// output: a new object containing al lproperties of source object, but with keys and values inverted

// - create new object 'inverted'.
// - go through each properties in the source object.
// - assign 'inverted' property name as a source object's value.
// - assign 'inverted' property value as a source object's property.
// - return 'inverted' as a return value.

function invert(source) {
  var inverted = {};
  for (var prop in source) {
    inverted[source[prop]] = prop;
  }
  return inverted;
}
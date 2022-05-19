/* exported setValue */

// input: object (JS object), key (JS string), and value (JS value)
// output: no return value

// - set the object's property using the input key, and value by the input value

function setValue(object, key, value) {
  object[key] = value;
}

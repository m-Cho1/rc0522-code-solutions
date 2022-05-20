/* exported chunk */

// input: array (any JS array), and size (positive integer number)
// output: a new array arrays.

// - create a new empty array named 'newArr'.
// - go through each elements in the input array, and increment the counter variable by the size value.
// - push the count array into 'newArr', by cutting the chunks into the given size.
// - return 'newArr' as a return value.

function chunk(array, size) {
  var newArr = [];
  for (var i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}

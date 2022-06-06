/* exported reverseWords */

// - create new array 'result'.
// - split words by space, and store into a new variable 'splitted'.
// - go through each word in 'splitted'.
// - create a new variable 'word' and store the index of 'splitted'.
// - split 'word' into array, then reverse the order, then convert back to sring.
// - add the return of the work into 'result'.
// - reuturn 'result' as a return value.

function reverseWords(string) {
  var result = [];
  var splitted = string.split(' ');
  for (var i = 0; i < splitted.length; i++) {
    var word = splitted[i];
    result.push(word.split('').reverse().join(''));
  }
  return result.join(' ');
}

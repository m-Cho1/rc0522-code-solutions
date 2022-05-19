/* exported reverseWord */

// input: a word, js string
// output: js string characters in backwards

// - create empty array named 'backwards'
// - go through each character in the input word.
// - add each character into the 'backwards', by adding in front of the previous added characters
// - convert the array into strings, then store them into new variable named 'stringBackwards'
// - return 'stringBackwards' as a return value

function reverseWord(word) {
  var backwards = [];
  for (var i = 0; i < word.length; i++) {
    backwards.unshift(word[i]);
  }
  var stringBackwards = backwards.join('');
  return stringBackwards;
}

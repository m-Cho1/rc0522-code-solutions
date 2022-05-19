/* exported isUpperCased */

// input: word, js string
// output: A Boolean value whether or not all characters in the input word are uppercased.

// - check if the word is all upper cased.
// - if upper cased, return true.
// - else, return false.

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

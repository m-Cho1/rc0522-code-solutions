/* exported isLowerCased */

// input: word, js string
// output: A Boolean value whether the input word is lower cased

// - check if the input word is all lowercased.
// - if lowercased, return true.
// - else, return false.

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

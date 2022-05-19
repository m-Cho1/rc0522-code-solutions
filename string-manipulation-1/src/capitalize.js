/* exported capitalize */

// input: word
// output: the word with first character upper cased

// - switch the input word into all lowercase, and store into new variable named 'toLow'.
// - access the first index of 'toLow' variable, then uppercase the first index of 'toLow'.
// - connect the rest of the 'toLow' characters after upper casing the first index of 'toLow', then save them into variable named 'firstCased'.
// - return 'firstCased' as a return value.

function capitalize(word) {
  var toLow = word.toLowerCase();
  var firstCased = toLow.charAt(0).toUpperCase() + toLow.substring(1);
  return firstCased;
}

/* exported capitalizeWord */

// input: word (single JS string)
// output: first character of the input word capitalized

// - take the input word and all lowercase the characters, then store into a new variable named' lowerCased'
// - check if the 'lowerCased' is strictly equal to string 'javascript'.
//    - if so, return 'JavaScript'.
// - access the first index of 'lowerCased', and uppercase the first character.
// - connect the rest of the characters with the uppercased first character, and store the work into a new variable named 'firstCharCased'
// - return 'firstCharCased' added with 'lowerCased' that the first index is cut as a return value

function capitalizeWord(word) {
  var lowerCased = word.toLowerCase();
  if (lowerCased === 'javascript') {
    return 'JavaScript';
  }
  var firstCharCased = lowerCased.charAt(0).toUpperCase();
  return firstCharCased + lowerCased.slice(1);

}

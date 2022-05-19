/* exported getWords */

// input: JS string containing zero or more words, separated by spaces
// output: an array of JS string

// - check if the input string contain any words.
// - if the input string contain words, split strings by spaces, then store them into new variable 'words', then return 'words' as a return value.
// - if string contains no words (''), then return empty array []

function getWords(string) {
  if (string !== '') {
    var words = string.split(' ');
    return words;
  } else if (string === '') {
    return [];
  }
}

/* exported numVowels */

// input: string(any JS string)
// output: the number of vowel characters in string

// - convert all letters into lowercased letters, and store into variable 'toLow'.
// - create a new variable name 'numberOfVowels' with value of 0.
// - go through each character of 'toLow', and check if the each letter matches with vowels (a, e, i, o, u).
// - if matches, add 1 to 'numberOfVowels'
// - return 'numberOfVowels' as a return value.

function numVowels(string) {
  var toLow = string.toLowerCase();
  var numberOfVowels = 0;
  for (var i = 0; i < toLow.length; i++) {
    if (toLow[i] === 'a' || toLow[i] === 'e' || toLow[i] === 'i' || toLow[i] === 'o' || toLow[i] === 'u') {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}

/* exported isVowel */

// input: char, a single JS string character
// output: A Boolean value if the input char is vowel

// - change the input char into all lowercase, then store it into new variable named 'toLow'
// - check if 'toLow' is strictly equal to characters a, e, i, o, u
// - if char strictly equal to vowels, return true.
// - else, return false.

function isVowel(char) {
  var toLow = char.toLowerCase();
  if (toLow === 'a' || toLow === 'e' || toLow === 'i' || toLow === 'o' || toLow === 'u') {
    return true;
  } else {
    return false;
  }
}

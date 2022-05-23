/* exported isPalindromic */

// pilandrome: a word which sequence of characters reads the same backward was madam or racecar.

// input: any JS string
// output: a Boolean value whether the input string is pilandrome

// - split the input string into each character, then reverse the order, then sotre them into variable 'backwards'.
// - convert 'backwards' into strings, store into 'backwardsStr'.
// - compare the 'backwardsStr' to the input string.
// - if 'backwardsStr' and the input string are strictly equal,
// - return true. Else, return false;

function isPalindromic(string) {
  var removeSpace = string.replace(' ', '');
  var backwards = removeSpace.split('').reverse();
  var backwardsStr = backwards.join('');
  if (backwardsStr === removeSpace) {
    return true;
  } else {
    return false;
  }
}

// edit/added steps:
// - replace any spaces between characters, and store the return to a variable 'removeSpace'.
// - use 'removeSpace' for the rest of the steps.

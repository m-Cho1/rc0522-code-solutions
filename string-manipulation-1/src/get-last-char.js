/* exported getLastChar */

// input: any JS string
// output: the last character of input string

// - split the input string by each character.
// - store the splitted characters into variable named 'splitted'.
// - access the last character of the 'splitted' variable.
// - return the last character of the 'splitted' as a return value.

function getLastChar(string) {
  var splitted = string.split('');
  return splitted[splitted.length - 1];
}

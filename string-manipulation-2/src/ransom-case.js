/* exported ransomCase */

// input: string (any JS string)
// output: string with every other character uppercased

// - switch all characters in string into lowercased letters, store them into variable named 'toLow'.
// - split the 'toLow' variable string by each character, and store them into new variable named 'splitted'
// - go through every other character of 'splitted', and uppercase them.
// - convert 'splitted' into string value, and return 'splitted' as a return value.

function ransomCase(string) {
  var toLow = string.toLowerCase();
  var splitted = toLow.split('');
  for (var i = 1; i < splitted.length; i += 2) {
    splitted[i] = splitted[i].toUpperCase();
  }
  return splitted.join('');
}

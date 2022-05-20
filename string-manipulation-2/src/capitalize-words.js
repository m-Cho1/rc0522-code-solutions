/* exported capitalizeWords */

// input: string(any JS string)
// output: string with every word's first letter capitalized

// - convert string into all lowercased, and store into a variable 'toLow'.
// - split the words in a string by space, and store them into variable 'words'.
// - go through index of 'words', and capitalize the first letter of every 'words' index.
// - store the work into variable 'firstCap'
// - return 'firstCap' as a return value

function capitalizeWords(string) {
  var toLow = string.toLowerCase();
  var words = toLow.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  var firstCap = words.join(' ');
  return firstCap;
}

/* exported isAnagram */

// - replace any spaces between the words/characters from string, and store the work into variable 'removeSpace1' for firstString, and 'removeSpace2' for secondString.
// - split both 'removeSpace1' and 'removeSpace2' by each character, then sort both of the 'removeSpace1' and 'removeSpace2' by alphabetical order, and store into variable 'order1' and 'order2' respectively.
// - compare if 'order1' and 'order2' converted to string are strictly equal.
// - if they are equal, return true.
// - else, return false.

function isAnagram(firstString, secondString) {
  var removeSpace1 = firstString.split(' ').join('');
  var removeSpace2 = secondString.split(' ').join('');
  var order1 = removeSpace1.split('').sort();
  var order2 = removeSpace2.split('').sort();
  if (order1.join('') === order2.join('')) {
    return true;
  } else {
    return false;
  }
}

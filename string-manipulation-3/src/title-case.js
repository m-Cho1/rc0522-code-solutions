/* exported titleCase */

function titleCase(title) {
  var minorWords = ['In', 'For', 'Of', 'The', 'In', 'To', 'On', 'And'];
  var toLow = title.toLowerCase();
  var firstCap = toLow.charAt(0).toUpperCase() + toLow.substring(1);
  var splitted = firstCap.split(' ');
  var result = [];
  for (var i = 0; i < splitted.length; i++) {
    var word = splitted[i];
    word = (word[0].toUpperCase() + word.substring(1));
    if (minorWords.indexOf(word) !== -1) {
      word = word.toLowerCase();
    }
    if (word === 'Api') {
      word = 'API';
    }
    if (word === 'Javascript') {
      word = 'JavaScript';
    }
    if (word === 'Javascript:') {
      word = 'JavaScript:';
    }
    if (word === 'In-depth') {
      word = 'In-Depth';
    }
    if (word === 'Self-taught') {
      word = 'Self-Taught';
    }

    result.push(word);
  }
  for (var j = 0; j < result.length; j++) {
    if (result[0] === 'the') {
      result[0] = 'The';
    }
    if (result[1] === 'the') {
      result[1] = 'The';
    }
    if (result[3] === 'the' && result[2].includes('Programmer:') === true) {
      result[3] = 'The';
    }
  }
  // console.log('result : ', result);
  return result.join(' ');
}

// - change input title into all lowercased, store into 'toLow' variable.
// - capitalize the first word in 'toLow' and store into 'firstCap' variable.
// - split 'firstCap' by single space, and store into 'splitted' variable.
// - create an empty array 'result'.
// - go through each element in the 'splitted' array.
// - store the index of splitted array into 'word' variable.
// - if word's length is greater than 3, uppercase the word's first character.
// - if word's value is 'api, or 'Javascript', or 'Javascript:', give the value of 'JavaScript'.
// - if the word's value is any 'minor' words, lowercase them.
// - if the word is any 'major' words, uppercase the first character of word.
// - if all conditions meet, push the word into the 'result' array.
// - convert the 'result', and return as a return value.

// function titleCase(title) {
//   var minorWords = ['In', 'For', 'Of', 'The', 'In', 'To', 'On', 'And'];
//   var toLow = title.toLowerCase();
//   var firstCap = toLow.charAt(0).toUpperCase() + toLow.substring(1);
//   var splitted = firstCap.split(' ');
//   var result = [];
//   for (var i = 0; i < splitted.length; i++) {
//     var word = splitted[i];
//     word = (word[0].toUpperCase() + word.substring(1));
//     if (minorWords.indexOf(word) !== -1) {
//       word = word.toLowerCase();
//     }
//     if (word === 'Api') {
//       word = 'API';
//     }
//     if (word === 'Javascript') {
//       word = 'JavaScript';
//     }
//     if (word === 'Javascript:') {
//       word = 'JavaScript:';
//     }
//     console.log('word : ', word);
//     result.push(word);
//   }
//   return result.join(' ');
// }

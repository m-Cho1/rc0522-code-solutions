/* exported titleCase */

function titleCase(title) {
  var result = [];
  var lowerCased = title.toLowerCase();
  var split = lowerCased.split(' ');
  for (var i = 0; i < split.length; i++) {
    var index = split[i];
    index = index[0].toUpperCase() + index.slice(1);
    if (index === 'Javascript') {
      index = 'JavaScript';
    }
    if (index.includes(':') && index.includes('Javascript')) {
      index = 'JavaScript:';
    }
    if (index === 'Api') {
      index = 'API';
    }
    if (index.includes('-')) {
      var hyphenated = index.split('-');
      hyphenated = hyphenated[0] + '-' + hyphenated[1][0].toUpperCase() + hyphenated[1].slice(1);
      // console.log('hyphenated : ', hyphenated);
      index = hyphenated;
    }
    if (index.length >= 4) {
      index = index[0].toUpperCase() + index.slice(1);
    }
    if (index === 'The' || index === 'To' || index === 'In' || index === 'For' || index === 'Of' || index === 'On' || index === 'And') {
      index = index[0].toLowerCase() + index.slice(1);
    }
    result.push(index);
  }
  if (result[0] === 'the') {
    result[0] = 'The';
  }
  if (result[1] === 'the') {
    result[1] = 'The';
  }
  if (result[3] === 'the' && result[2].includes('Programmer:') === true) {
    result[3] = 'The';
  }
  return result.join(' ');

}

// - change input title into all lowercased, store into 'toLow' variable.
// - capitalize the first word in 'toLow' and store into 'firstCap' variable.
// - split 'firstCap' by single space, and store into 'splitted' variable.
// - create an empty array 'result'.
// - go through each element in the 'splitted' array.
// - store the index of splitted array into 'word' variable.
// - if word's length is greater than or equal to 4, uppercase the word's first character.
// - if word's value is 'api, or 'Javascript', or 'Javascript:', give the value of 'JavaScript'.
// - if the word's value is any 'minor' words, lowercase them.
// - if the word is any 'major' words, uppercase the first character of word.
// - if all conditions meet, push the word into the 'result' array.
// - go through indexes in 'result', check if the index match with the word 'the', that needs to be uppercased.
// - convert to 'The' if the index matches the condition.
// - convert the 'result', and return as a return value.

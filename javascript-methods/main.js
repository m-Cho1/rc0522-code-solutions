var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);

var heroes = [
  'Iron Man',
  'Thor',
  'Black Widow',
  'Captain America'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'CSS',
    author: 'Coder Smith'
  },
  {
    title: 'JavaScript',
    author: 'JS Maxx'
  },
  {
    title: 'HTML',
    author: 'HT Miller'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library: ', library);

var fullName = 'Minji Cho';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);

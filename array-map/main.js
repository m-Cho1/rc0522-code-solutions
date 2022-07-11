const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const isDouble = number => {
  return number * 2;
};
const doubled = numbers.map(isDouble);

console.log(`doubled: ${doubled}`);

const prices = numbers.map(num => {
  return `$${num.toFixed(2)}`;
});
console.log(`prices: ${prices}`);

const upperCased = languages.map(word => {
  return word.toUpperCase();
});
console.log(`upperCased: ${upperCased}`);

const firstLetters = languages.map(letter => {
  return letter[0];
});
console.log(`firstLetters: ${firstLetters}`);

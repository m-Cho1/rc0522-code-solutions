const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let result = '';

const num1 = parseInt(process.argv[2]);
const operator = process.argv[3];
const num2 = parseInt(process.argv[4]);

if (operator === 'plus') {
  result = add(num1, num2);
} else if (operator === 'minus') {
  result = subtract(num1, num2);
} else if (operator === 'times') {
  result = multiply(num1, num2);
} else if (operator === 'divideby') {
  result = divide(num1, num2);
} else {
  result = 'invalid operation';
}

console.log('Result is: ', result);

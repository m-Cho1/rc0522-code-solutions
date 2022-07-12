const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previous, current) => {
  // console.log(`previous: ${previous}, current: ${current} `);
  return previous + current;
});

console.log(`sum: ${sum}`);

const multiply = (previous, current) => {
  // console.log(`previous: ${previous}, current: ${current}`);
  return previous * current;
};
const product = numbers.reduce(multiply);
console.log(`product: ${product}`);

// balance:
const initialValue = 0;
const sumAllAmounts = (previous, current) => {
  // console.log('previous: ', previous, ', current: ', current);
  if (current.type === 'deposit') {
    previous += current.amount;
  } else if (current.type === 'withdrawal') {
    previous -= current.amount;
  }
  return previous;
};
const balance = account.reduce(sumAllAmounts, initialValue);
console.log('balance: ', balance);

// composite:
const combineProp = (previous, current) => {
  const result = Object.assign(previous, current);
  return result;
};
const composite = traits.reduce(combineProp, {});
console.log('composite: ', composite);

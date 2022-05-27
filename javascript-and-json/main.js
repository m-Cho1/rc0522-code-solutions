var newArr = [
  { isbn: '2341343234' },
  { title: 'JavaScript' },
  { author: 'John Adams' }
];

console.log('newArr : ', newArr);
console.log('typeof newArr: ', typeof (newArr));

var jsonNewArr = JSON.stringify(newArr);
console.log('jsonNewArr : ', jsonNewArr);
console.log('typeof jsonNewArr : ', typeof (jsonNewArr));

var string1 = '{"id": 246231, "name": "John"}';
console.log('string: ', string1);
console.log('typeof string: ', typeof (string1));

var parse = JSON.parse(string1);
console.log('parse : ', parse);
console.log('typeof parse : ', typeof (parse));

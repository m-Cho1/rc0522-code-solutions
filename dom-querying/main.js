console.log('hello world');

var $h1 = document.querySelector('h1');
console.log('h1: ', $h1);

console.dir($h1);

var $explanation = document.querySelector('#explanation');
console.log('explanation: ', $explanation);
console.dir($explanation);

var $hint = document.querySelector('.hint');
console.log('hint: ', $hint);
console.dir($hint);

var $paragraphs = document.querySelectorAll('p');
console.log('node list of p elements: ', $paragraphs);

var $exampleLinks = document.querySelectorAll('.example-link');
console.log('node list of example-link: ', $exampleLinks);

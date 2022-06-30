const fs = require('fs');
const randomNum = String(Math.random());

fs.writeFile('random.txt', randomNum + '\n', 'utf-8', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});

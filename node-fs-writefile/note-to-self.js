const fs = require('fs');

const data = process.argv[2] + '\n';

fs.writeFile('note.txt', data, 'utf-8', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});

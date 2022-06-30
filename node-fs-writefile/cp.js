const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('readfile is: ', data);
  fs.writeFile(process.argv[3], data, err => {
    if (err) throw err;
    console.log('The file has been copied!');
  });
});

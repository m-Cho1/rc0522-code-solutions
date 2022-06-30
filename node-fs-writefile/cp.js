const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.writeFile(process.argv[3] + '\n', data, err => {
    if (err) throw err;
    console.log('The file has been copied!');
  });
});

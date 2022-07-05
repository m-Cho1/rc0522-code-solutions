const data = require('./data.json');
const fs = require('fs');

const remove = () => {
  const deleteNote = process.argv[3];
  if (data.notes[deleteNote]) {
    delete data.notes[deleteNote];
  }
  console.log('Item ' + deleteNote + ' has been deleted!');

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};

module.exports = remove;

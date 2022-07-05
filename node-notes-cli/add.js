const data = require('./data.json');
const fs = require('fs');

const create = () => {
  const newNote = process.argv[3];
  data.notes[data.nextId] = newNote;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('New note created!');
  });
};

module.exports = create;

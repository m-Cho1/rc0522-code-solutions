const data = require('./data.json');
const fs = require('fs');

const update = () => {
  const targetID = process.argv[3];
  const updateContent = process.argv[4];
  data.notes[targetID] = updateContent;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Note ' + targetID + ' is updated!');
  });
};

module.exports = update;

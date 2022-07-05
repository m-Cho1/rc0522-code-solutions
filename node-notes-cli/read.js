const data = require('./data.json');

const read = () => {
  console.log('Reading notes in data.json: ');
  for (const prop in data.notes) {
    console.log(prop + ': ', data.notes[prop]);
  }

};

module.exports = read;

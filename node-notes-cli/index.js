const command = process.argv[2];
const read = require('./read');
const create = require('./add');
const remove = require('./delete');
const update = require('./update');

if (command === 'read') {
  read();
} else if (command === 'create') {
  create();
} else if (command === 'delete') {
  remove();
} else if (command === 'update') {
  update();
} else {
  console.log('Please type a correct command');
}

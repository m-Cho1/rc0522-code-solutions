const takeAChance = require('./take-a-chance');
const check = takeAChance('Minji');

check
  .then(resolve => {
    console.log(resolve);
  });
check.catch(reject => {
  console.log(reject.message);
});

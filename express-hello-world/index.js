const express = require('express');
const app = express();

app.use(function (req, res) {
  console.log('res.send: ', res.send('Hello Express!'));

});

app.listen(3000, () => {
  console.log('Express server listening on port 3000!');
});

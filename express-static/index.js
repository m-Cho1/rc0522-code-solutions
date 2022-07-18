const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, 'public');

const staticValue = express.static(absolutePath);

app.use(staticValue);

app.listen(3000, () => {
  console.log('listening on port 3000');
});

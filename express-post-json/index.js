const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res, next) => {
  const gradesArr = [];
  for (const property in grades) {
    gradesArr.push(grades[property]);
  }
  res.json(gradesArr);
  next();
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  if (req.method !== 'POST') {
    res.status(400).send('bad request');
    return;
  }
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.sendStatus(201);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

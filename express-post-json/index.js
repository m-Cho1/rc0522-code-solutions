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
  const newData = req.body;
  const id = nextId;
  nextId++;
  newData.id = id;
  grades[id] = newData;
  // eslint-disable-next-line no-console
  console.log('req.body', req.body);
  res.status(201).json(newData);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

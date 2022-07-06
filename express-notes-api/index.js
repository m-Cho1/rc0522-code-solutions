const dataJSON = require('./data.json');
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const prop in dataJSON.notes) {
    notesArr.push(dataJSON.notes[prop]);
  }
  res.status(200).json(notesArr);

});

app.get('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);

  if (noteId <= 0) {
    res.status(400).json({ error: 'noteId must be a positive integer' });
  } else if (!dataJSON.notes[noteId]) {
    res.status(404).json({ error: 'Cannot find note with id ' + noteId });
  } else {
    res.status(200).json(dataJSON.notes[noteId]);
  }

});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  if (!newNote.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const id = dataJSON.nextId;
    newNote.id = id;
    dataJSON.notes[newNote.id] = newNote;
    dataJSON.nextId++;

    fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(newNote);
      }

    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);

  if (noteId <= 0) {
    res.status(400).json({ error: 'noteId must be a positive integer' });
  } else if (!noteId) {
    res.status(404).json({ error: 'cannot find note with id ' + noteId });
  } else {
    delete dataJSON.notes[noteId];
    fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  const updateNote = req.body;

  if (noteId <= 0) {
    res.status(400).json({ error: 'noteId must be a positive integer' });
  } else if (!updateNote.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!dataJSON.notes[noteId]) {
    res.status(404).json({ error: 'Cannot find note with id ' + noteId });
  } else {

    dataJSON.notes[noteId] = updateNote;
    updateNote.id = noteId;
    fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(updateNote);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

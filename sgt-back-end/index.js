const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/', (req, res, next) => {
  const sql = `
    select *
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'unexpected error occurred' });
    });
});

app.use(express.json());

app.post('/api/grades/', (req, res, next) => {
  const gradeScore = Number(req.body.score);
  const gradesData = `
    INSERT INTO grades(name, course, score)
    VALUES($1, $2, $3)
    RETURNING *
  `;
  const values = [req.body.name, req.body.course, gradeScore];

  if (values.includes(undefined)) {
    res.status(400).json({
      error: 'name, course are required field'
    });
    return;
  } else if (gradeScore < 0 || gradeScore > 100) {
    res.status(400).json({
      error: 'score must be a positive integer between 0 and 100'
    });
    return;
  }

  db.query(gradesData, values)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const score = Number(req.body.score);
  const updatedGrade = `
    UPDATE "grades"
    SET "name" = $1, "course" = $2, "score" = $3
    WHERE "gradeId" = $4
    RETURNING *
  `;
  const values = [req.body.name, req.body.course, score, gradeId];
  if (values.includes(undefined)) {
    res.status(400).json({
      error: 'name, course, score are required field'
    });
    return;
  } else if (score > 100 || score < 0) {
    res.status(400).json({
      error: 'score musbe be a positive integer and between 0 and 100'
    });
    return;
  } else if (gradeId <= 0 || (!gradeId)) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }

  db.query(updatedGrade, values)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (!updatedGrade) {
        res.status(404).json({
          error: `cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(updatedGrade);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'undexpected error occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const deleteGrade = `
    DELETE FROM "grades"
      WHERE "gradeId" = $1
    RETURNING *
  `;
  const value = [gradeId];
  if (gradeId <= 0 || (!gradeId)) {
    res.status(400).json({
      error: 'gradeId must be a positive integer | invalid gradeId'
    });

  }
  db.query(deleteGrade, value)
    .then(result => {
      const gradeToDelete = result.rows[0];
      if (!gradeToDelete) {
        res.status(404).json({
          error: `cannot find gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'unexpected error occurred'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('port 3000 listening');
});

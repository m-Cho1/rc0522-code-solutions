SELECT "filmId",
       "title"
FROM "films"
WHERE "rentalRate" < 1.0
LIMIT 50;

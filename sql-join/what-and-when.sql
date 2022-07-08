SELECT "releaseYear",
       "genres"."name" AS "genre"
FROM "films"
JOIN "filmGenre" USING ("filmId")
JOIN "genres" USING ("genreId")
WHERE "title" = 'Boogie Amelie';

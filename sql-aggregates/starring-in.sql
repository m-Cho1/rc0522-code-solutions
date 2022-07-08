SELECT "genres"."name" AS "genre",
       COUNT("genreId") AS "appeared times"
  FROM "genres"
  JOIN "filmGenre" USING ("genreId")
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" USING ("actorId")
  WHERE "firstName" = 'Lisa'
  AND   "lastName" = 'Monroe'
  GROUP BY "genres"."name";

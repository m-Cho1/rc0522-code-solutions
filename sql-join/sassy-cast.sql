SELECT "firstName" AS "First Name",
       "lastName" AS "Last Name"
FROM "actors"
JOIN "castMembers" USING ("actorId")
JOIN "films" USING ("filmId")
WHERE "title" = 'Jersey Sassy';

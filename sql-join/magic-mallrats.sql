SELECT "firstName" AS "First Name",
       "lastName" AS "Last Name"
FROM "customers"
JOIN "rentals" USING ("customerId")
JOIN "inventory" USING ("inventoryId")
JOIN "films" USING ("filmId")
WHERE "title" = 'Magic Mallrats';

SELECT "c"."firstName" AS "First Name",
       "c"."lastName" AS "Last Name",
       SUM("amount") AS "Total $ spent"
  FROM "customers" AS "c"
  JOIN "payments" USING ("customerId")
  GROUP BY "c"."firstName", "c"."lastName"
  ORDER BY "Total $ spent" DESC;

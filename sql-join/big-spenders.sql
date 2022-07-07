SELECT "amount",
       "firstName" AS "First Name",
       "lastName" AS "Last Name"
FROM "payments"
JOIN "customers" USING ("customerId")
ORDER BY "amount" DESC
LIMIT 10;

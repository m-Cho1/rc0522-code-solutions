SELECT "line1" AS "address",
       "city"."name" AS "city",
       "district",
       "country"."name" AS "country"
  FROM "addresses"
  JOIN "cities" AS "city" USING ("cityId")
  JOIN "countries" AS "country" USING ("countryId");

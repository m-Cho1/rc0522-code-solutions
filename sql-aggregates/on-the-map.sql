SELECT "countries"."name" AS "country",
       COUNT("countryId") AS "numberOfCities"
  FROM "countries"
  JOIN "cities" AS "city" USING ("countryId")
  GROUP BY "country";

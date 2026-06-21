/*
  Warnings:

  - The values [YAMATO,SAGAWA] on the enum `Courier` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Courier_new" AS ENUM ('STEADFAST', 'PATHAO', 'REDX', 'PAPERFLY', 'E_DESH', 'SA_PARCEL', 'SUNDARBAN');
ALTER TABLE "order" ALTER COLUMN "courier" TYPE "Courier_new" USING ("courier"::text::"Courier_new");
ALTER TYPE "Courier" RENAME TO "Courier_old";
ALTER TYPE "Courier_new" RENAME TO "Courier";
DROP TYPE "public"."Courier_old";
COMMIT;

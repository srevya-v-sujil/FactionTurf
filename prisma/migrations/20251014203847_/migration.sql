/*
  Warnings:

  - You are about to drop the `Factions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Factions";

-- CreateTable
CREATE TABLE "factions" (
    "id" SERIAL NOT NULL,
    "github_Id" TEXT NOT NULL,
    "faction" TEXT NOT NULL,

    CONSTRAINT "factions_pkey" PRIMARY KEY ("id")
);

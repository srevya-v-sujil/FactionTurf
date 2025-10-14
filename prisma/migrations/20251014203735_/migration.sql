-- CreateTable
CREATE TABLE "Factions" (
    "id" SERIAL NOT NULL,
    "github_Id" TEXT NOT NULL,
    "faction" TEXT NOT NULL,

    CONSTRAINT "Factions_pkey" PRIMARY KEY ("id")
);

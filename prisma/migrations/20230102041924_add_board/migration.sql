/*
  Warnings:

  - Added the required column `makerid` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "makerid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "password" VARCHAR(200) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_makerid_fkey" FOREIGN KEY ("makerid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

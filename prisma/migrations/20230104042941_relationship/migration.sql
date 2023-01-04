/*
  Warnings:

  - You are about to drop the column `makerid` on the `Board` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_makerid_fkey";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "makerid";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_title_fkey" FOREIGN KEY ("title") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

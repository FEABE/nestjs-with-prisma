-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_title_fkey";

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_title_fkey" FOREIGN KEY ("title") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

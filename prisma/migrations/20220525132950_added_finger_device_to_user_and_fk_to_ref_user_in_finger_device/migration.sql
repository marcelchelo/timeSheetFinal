/*
  Warnings:

  - Added the required column `userID` to the `FingerDevice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FingerDevice` ADD COLUMN `userID` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `FingerDevice` ADD CONSTRAINT `FingerDevice_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

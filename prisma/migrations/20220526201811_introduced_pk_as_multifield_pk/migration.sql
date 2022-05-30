/*
  Warnings:

  - The primary key for the `FingerDevice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `siteName` on table `FingerDevice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `FingerDevice` DROP PRIMARY KEY,
    MODIFY `siteName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`, `siteName`, `userID`);

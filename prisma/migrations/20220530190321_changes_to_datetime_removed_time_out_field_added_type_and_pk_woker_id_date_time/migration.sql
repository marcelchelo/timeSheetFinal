/*
  Warnings:

  - The primary key for the `Transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `timeIn` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `timeOut` on the `Transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Transactions` DROP PRIMARY KEY,
    DROP COLUMN `timeIn`,
    DROP COLUMN `timeOut`,
    ADD COLUMN `Type` VARCHAR(191) NOT NULL DEFAULT 'Present',
    ADD COLUMN `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD PRIMARY KEY (`workerID`, `datetime`);

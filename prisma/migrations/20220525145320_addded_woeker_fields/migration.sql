/*
  Warnings:

  - You are about to alter the column `phone` on the `Worker` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `role` on the `Worker` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE `Worker` ADD COLUMN `rate` DECIMAL(65, 30) NOT NULL DEFAULT 15.00,
    MODIFY `phone` VARCHAR(15) NOT NULL,
    MODIFY `role` VARCHAR(20) NULL;

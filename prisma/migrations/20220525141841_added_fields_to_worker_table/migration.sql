/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Worker` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lastName` to the `Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Worker` ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Worker_phone_key` ON `Worker`(`phone`);

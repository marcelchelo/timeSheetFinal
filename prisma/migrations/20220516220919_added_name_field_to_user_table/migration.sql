-- AlterTable
ALTER TABLE `User` ADD COLUMN `name` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Worker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

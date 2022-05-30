-- CreateTable
CREATE TABLE `Transactions` (
    `timeIn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `timeOut` DATETIME(3) NOT NULL,
    `workerID` INTEGER NOT NULL,
    `locationID` INTEGER NOT NULL,

    PRIMARY KEY (`workerID`, `locationID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_locationID_fkey` FOREIGN KEY (`locationID`) REFERENCES `FingerDevice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_workerID_fkey` FOREIGN KEY (`workerID`) REFERENCES `Worker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `WorkerToDevice` (
    `workerID` INTEGER NOT NULL,
    `devID` INTEGER NOT NULL,
    `fingerID` INTEGER NULL,

    PRIMARY KEY (`workerID`, `devID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkerToDevice` ADD CONSTRAINT `WorkerToDevice_devID_fkey` FOREIGN KEY (`devID`) REFERENCES `FingerDevice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkerToDevice` ADD CONSTRAINT `WorkerToDevice_workerID_fkey` FOREIGN KEY (`workerID`) REFERENCES `Worker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

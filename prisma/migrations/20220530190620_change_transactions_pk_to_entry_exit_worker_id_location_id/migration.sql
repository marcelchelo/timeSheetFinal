/*
  Warnings:

  - The primary key for the `Transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Type` on the `Transactions` table. All the data in the column will be lost.

*/

-- The above warning was correct, i fucked it up and dropped the table. Then reset it. Do not do it again. 
-- AlterTable
Drop TABLE `Transactions`

/*
  Warnings:

  - You are about to drop the column `post_user` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_post_user_id_fkey";

-- DropIndex
DROP INDEX "User_post_user_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "post_user";

/*
  Warnings:

  - The `post_user_id` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[post_user]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_post_user_id_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "post_user_id";
ALTER TABLE "Post" ADD COLUMN     "post_user_id" STRING;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "post_user" STRING;

-- CreateIndex
CREATE UNIQUE INDEX "User_post_user_key" ON "User"("post_user");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_post_user_id_fkey" FOREIGN KEY ("post_user_id") REFERENCES "User"("post_user") ON DELETE SET NULL ON UPDATE CASCADE;

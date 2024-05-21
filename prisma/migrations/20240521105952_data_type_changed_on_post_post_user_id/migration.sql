/*
  Warnings:

  - The `post_user_id` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "post_user_id";
ALTER TABLE "Post" ADD COLUMN     "post_user_id" INT8;

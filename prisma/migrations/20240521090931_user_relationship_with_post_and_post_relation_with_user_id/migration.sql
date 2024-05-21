-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "post_user_id" INT8 NOT NULL DEFAULT 123456789;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_post_user_id_fkey" FOREIGN KEY ("post_user_id") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Post" (
    "uid" INT8 NOT NULL DEFAULT unique_rowid(),
    "title" STRING NOT NULL,
    "desc" STRING NOT NULL,
    "img" STRING,
    "userId" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("uid")
);
DROP INDEX "Post_slug_key";
INSERT INTO "_prisma_new_Post" ("createdAt","desc","img","slug","title","updatedAt","userId") SELECT "createdAt","desc","img","slug","title","updatedAt","userId" FROM "Post";
DROP TABLE "Post" CASCADE;
ALTER TABLE "_prisma_new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
CREATE TABLE "_prisma_new_User" (
    "uid" INT8 NOT NULL DEFAULT unique_rowid(),
    "username" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "img" STRING,
    "isAdmin" BOOL NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);
DROP INDEX "User_email_key";
DROP INDEX "User_username_key";
INSERT INTO "_prisma_new_User" ("createdAt","email","img","isAdmin","password","updatedAt","username") SELECT "createdAt","email","img","isAdmin","password","updatedAt","username" FROM "User";
DROP TABLE "User" CASCADE;
ALTER TABLE "_prisma_new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateTable
CREATE TABLE "Contact" (
    "uid" INT8 NOT NULL DEFAULT unique_rowid(),
    "user_message" STRING,
    "user_email" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("uid")
);

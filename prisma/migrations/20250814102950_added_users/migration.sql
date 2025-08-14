-- CreateEnum
CREATE TYPE "public"."role" AS ENUM ('user', 'Admin', 'visitor');

-- AlterTable
ALTER TABLE "public"."Event" ALTER COLUMN "termsAndConditions" DROP NOT NULL,
ALTER COLUMN "vehiclesCount" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "public"."user" (
    "username" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."role" NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "public"."user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

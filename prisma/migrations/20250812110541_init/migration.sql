-- CreateEnum
CREATE TYPE "public"."StateNames" AS ENUM ('Maharashtra', 'Bihar', 'Chhattisgarh', 'Karnataka', 'Manipur', 'Arunachal_Pradesh', 'Assam', 'Gujarat', 'Punjab', 'Mizoram', 'Andhra_Pradesh', 'West_Bengal', 'Goa', 'Haryana', 'Himachal_Pradesh', 'Kerala', 'Rajasthan', 'Jharkhand', 'Madhya_Pradesh', 'Odisha', 'Nagaland', 'TamilNadu', 'Uttar_Pradesh', 'Telangana', 'Meghalaya', 'Sikkim', 'Tripura', 'Uttarakhand', 'Jammu_and_Kashmir', 'Delhi', 'Lakshadweep', 'Puducherry', 'Ladakh', 'Chandigarh', 'Andaman_and_Nicobar_Islands', 'Dadra_and_Nagar_Haveli_and_Daman_and_Diu', 'PAN_INDIA');

-- CreateTable
CREATE TABLE "public"."State" (
    "id" TEXT NOT NULL,
    "name" "public"."StateNames" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "stateId" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "public"."State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "public"."Location"("name");

-- CreateIndex
CREATE INDEX "Location_stateId_idx" ON "public"."Location"("stateId");

-- AddForeignKey
ALTER TABLE "public"."Location" ADD CONSTRAINT "Location_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

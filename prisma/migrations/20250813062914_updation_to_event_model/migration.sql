-- CreateEnum
CREATE TYPE "public"."EventCategory" AS ENUM ('TwoWheeler', 'threeWheeler', 'fourWheeler');

-- CreateEnum
CREATE TYPE "public"."EventStatusType" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "public"."EventCurrentStatus" AS ENUM ('pending', 'ongoing', 'completed');

-- CreateEnum
CREATE TYPE "public"."EventBidLockType" AS ENUM ('unlocked', 'locked');

-- CreateTable
CREATE TABLE "public"."Seller" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "contactPerson" TEXT NOT NULL DEFAULT '',
    "GSTNumber" TEXT NOT NULL DEFAULT '',
    "billingContactPerson" TEXT NOT NULL DEFAULT '',
    "mobile" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VehicleCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "VehicleCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" TEXT NOT NULL,
    "eventNo" SERIAL NOT NULL,
    "eventCategory" "public"."EventCategory" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "firstVehicleEndDate" TIMESTAMP(3),
    "sellerId" TEXT,
    "vehicleCategoryId" TEXT,
    "locationId" TEXT,
    "noOfBids" INTEGER NOT NULL DEFAULT 10,
    "status" "public"."EventStatusType" DEFAULT 'active',
    "currentStatus" "public"."EventCurrentStatus",
    "downloadableFile_filename" TEXT,
    "termsAndConditions" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "bidLock" "public"."EventBidLockType" DEFAULT 'unlocked',
    "extraTimeTrigerIn" INTEGER DEFAULT 2,
    "extraTime" INTEGER DEFAULT 2,
    "vehicleLiveTimeIn" INTEGER DEFAULT 0,
    "gapInBetweenVehicles" INTEGER DEFAULT 0,
    "vehiclesCount" INTEGER,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Vehicle" (
    "id" TEXT NOT NULL,
    "vehicleIndexNo" SERIAL NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "bidTimeExpire" TIMESTAMP(3) NOT NULL,
    "bidStartTime" TIMESTAMP(3) NOT NULL,
    "eventId" TEXT,
    "loanAgreementNo" TEXT NOT NULL,
    "registeredOwnerName" TEXT DEFAULT '',
    "quoteIncreament" INTEGER DEFAULT 1000,
    "make" TEXT DEFAULT '',
    "model" TEXT DEFAULT '',
    "varient" TEXT DEFAULT '',
    "category" TEXT DEFAULT '',
    "fuel" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "rcStatus" TEXT DEFAULT '',
    "YOM" INTEGER DEFAULT 0,
    "ownership" INTEGER DEFAULT 0,
    "mileage" INTEGER DEFAULT 0,
    "kmReading" INTEGER DEFAULT 0,
    "insuranceStatus" TEXT DEFAULT '',
    "yardLocation" TEXT DEFAULT '',
    "startPrice" DOUBLE PRECISION DEFAULT 0,
    "reservePrice" DOUBLE PRECISION DEFAULT 0,
    "repoDt" TEXT DEFAULT '',
    "veicleLocation" TEXT DEFAULT '',
    "vehicleRemarks" TEXT DEFAULT '',
    "auctionManager" TEXT DEFAULT '',
    "parkingCharges" TEXT DEFAULT '',
    "insurance" TEXT DEFAULT '',
    "insuranceValidTill" TEXT DEFAULT '',
    "tax" TEXT DEFAULT '',
    "taxValidityDate" TEXT DEFAULT '',
    "fitness" TEXT DEFAULT '',
    "permit" TEXT DEFAULT '',
    "engineNo" TEXT DEFAULT '',
    "chassisNo" TEXT DEFAULT '',
    "image" TEXT DEFAULT '',
    "inspectionLink" TEXT DEFAULT '',
    "autobseContact" TEXT DEFAULT '',
    "autobse_contact_person" TEXT DEFAULT '',
    "vehicleCondition" TEXT DEFAULT '',
    "powerSteering" TEXT DEFAULT '',
    "shape" TEXT DEFAULT '',
    "color" TEXT DEFAULT '',
    "state" TEXT DEFAULT '',
    "city" TEXT DEFAULT '',
    "area" TEXT DEFAULT '',
    "paymentTerms" TEXT DEFAULT '',
    "dateOfRegistration" TEXT DEFAULT '',
    "hypothication" TEXT DEFAULT '',
    "climateControl" TEXT DEFAULT '',
    "doorCount" INTEGER DEFAULT 0,
    "gearBox" TEXT DEFAULT '',
    "buyerFees" TEXT DEFAULT '',
    "rtoFine" TEXT DEFAULT '',
    "parkingRate" TEXT DEFAULT '',
    "approxParkingCharges" TEXT DEFAULT '',
    "clientContactPerson" TEXT DEFAULT '',
    "clientContactNo" TEXT DEFAULT '',
    "additionalRemarks" TEXT DEFAULT '',
    "lotNumber" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "address" TEXT DEFAULT '',
    "pincode" TEXT DEFAULT '',
    "yardName" TEXT DEFAULT '',
    "yardState" TEXT DEFAULT '',

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seller_name_key" ON "public"."Seller"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleCategory_name_key" ON "public"."VehicleCategory"("name");

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "public"."Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_vehicleCategoryId_fkey" FOREIGN KEY ("vehicleCategoryId") REFERENCES "public"."VehicleCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vehicle" ADD CONSTRAINT "Vehicle_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

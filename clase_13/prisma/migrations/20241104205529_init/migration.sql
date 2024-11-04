-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('available', 'unavailable');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

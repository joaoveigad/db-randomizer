/*
  Warnings:

  - A unique constraint covering the columns `[especime]` on the table `decomposedNames` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "usuariosAutorizados" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuariosAutorizados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuariosAutorizados_id_key" ON "usuariosAutorizados"("id");

-- CreateIndex
CREATE UNIQUE INDEX "usuariosAutorizados_email_key" ON "usuariosAutorizados"("email");

-- CreateIndex
CREATE UNIQUE INDEX "decomposedNames_especime_key" ON "decomposedNames"("especime");

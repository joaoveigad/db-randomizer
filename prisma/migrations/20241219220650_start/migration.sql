-- CreateTable
CREATE TABLE "decomposedNames" (
    "especime" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "prefixo" TEXT NOT NULL,
    "fill" TEXT NOT NULL,
    "sufixo" TEXT NOT NULL,

    CONSTRAINT "decomposedNames_pkey" PRIMARY KEY ("especime")
);

-- CreateIndex
CREATE UNIQUE INDEX "decomposedNames_nome_key" ON "decomposedNames"("nome");

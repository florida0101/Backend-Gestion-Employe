-- CreateTable
CREATE TABLE "Employe" (
    "numEmp" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "nombreJours" INTEGER NOT NULL,
    "tauxJournalier" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Employe_pkey" PRIMARY KEY ("numEmp")
);

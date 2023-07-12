-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Curso" (
    "hora" TEXT NOT NULL,
    "aula" TEXT NOT NULL,
    "sala" TEXT NOT NULL,
    "professor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "hora" TEXT NOT NULL,
    "informacao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_id_key" ON "Aluno"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_id_key" ON "Administrador"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_matricula_key" ON "Administrador"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_email_key" ON "Administrador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Curso_hora_key" ON "Curso"("hora");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_hora_key" ON "Professor"("hora");

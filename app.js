//import express, { Application } from 'express';

//const app: Application = express();

//const port = process.env.PORT || 3000;

//app.use(express.json());

//app.listen(port, () => {
  //console.log(`Listening to requests on port ${port}`);
//});




import express, { Application } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app: Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post(`/signup`, async (req, res) => {
  const { nome, email } = req.body;

  const result = await prisma.aluno.create({ 
    data: {
      nome,
      email
    },
    get aluno_1() {
      return this._aluno;
    },
    set aluno_1(value) {
      this._aluno = value;
    },
    get aluno() {
      return this._aluno;
    },
    set aluno(value) {
      this._aluno = value;
    },
  });

  res.json(result);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

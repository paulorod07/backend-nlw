import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.json({ ok: true });
});

app.post('/', (request: Request, response: Response) => {
  return response.json({ message: 'Salvos com sucesso!' });
});

app.listen(3333);
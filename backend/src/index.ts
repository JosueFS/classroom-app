import express, { Request, Response, NextFunction as Next } from 'express';
import cors from 'cors';

import 'dotenv/config';

import routes from './routes';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
// app.use(cors);

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: Next) => {
  console.log('An error occured:', error);

  response.json({ message: error.message || 'An unknown error occured.' });
});

app.listen(PORT, () => console.log(`\nServidor online na porta: ${PORT}!`));

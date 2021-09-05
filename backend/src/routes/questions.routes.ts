import { Router } from 'express';

import connect from '../services/mongodb';

import Question from '../models/question.model';

const questionsRouter = Router();

questionsRouter.get('/', async (request, response) => {
  console.log('Acessando endpoint de questões');
  await connect();

  const questionsList = await Question.find();

  return response.status(200).json(questionsList);
});

questionsRouter.post('/', async (request, response) => {
  console.log('Criando nova questão');
  await connect();

  return response.status(201).json();
});

export default questionsRouter;

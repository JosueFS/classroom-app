import { Router } from 'express';

import connect from '../services/mongodb';

import Quiz from '../models/quiz.model';

const quizRouter = Router();

quizRouter.get('/', async (request, response) => {
  console.log('Acessando endpoint de questionários');
  await connect();

  const quiz = await Quiz.find();

  return response.status(200).json(quiz);
});

quizRouter.post('/', async (request, response) => {
  console.log('Criando nova categoria de Questionário');
  await connect();

  //Create Quiz

  return response.status(201).json();
});

export default quizRouter;

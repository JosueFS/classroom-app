import { Router } from 'express';

import connect from '../services/mongodb';

import Quiz, { QuizType } from '../models/quiz.model';
import Question, { QuestionType } from '../models/question.model';

const quizRouter = Router();

quizRouter.get('/', async (request, response) => {
  console.log('Lista de questionários');
  await connect();

  const quiz = await Quiz.find();

  return response.status(200).json(quiz);
});

quizRouter.get('/:subject', async (request, response) => {
  console.log('Lista de Questões de determinado Assunto');
  const { subject } = request.params;

  await connect();

  const [quiz] = await Quiz.find({
    subject,
  });

  if (!quiz) {
    return response.status(406).json(`No ${subject} Quiz was found`);
  }

  const questions: QuestionType[] = await Question.find(
    {
      _id: { $in: quiz.questions },
    },
    {
      correct_answer: false,
    },
  );

  return response.status(200).json({
    subject,
    questions,
  });
});

quizRouter.post('/', async (request, response) => {
  console.log('Criando nova categoria de Questionário');
  const { subject } = request.body;

  await connect();

  const quiz = await Quiz.create({
    subject,
  });

  return response.status(201).json(quiz);
});

export default quizRouter;

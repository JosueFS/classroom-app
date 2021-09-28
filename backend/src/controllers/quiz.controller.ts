import { Request, Response } from 'express';

import connect from '../services/mongodb';

import Quiz, { IQuizType } from '../models/quiz.model';
import Question, { IQuestionType } from '../models/question.model';
import { Types } from 'mongoose';

const QuizController = {
  index: async (request: Request, response: Response) => {
    console.log('Lista de questionários');
    const subject = request.query.subject;

    console.log(subject);

    await connect();

    const quizList: IQuizType[] = await Quiz.find({
      subject,
    });

    if (!quizList) {
      return response.status(406).json(`No ${subject} Quiz was found`);
    }

    const questions: IQuestionType[] = await Question.find(
      {
        _id: { $in: quizList },
      },
      {
        correct_answer: false,
      },
    );

    return response.status(200).json(quizList);
  },
  show: async (request: Request, response: Response) => {
    console.log('Lista de Questões de determinado Assunto');
    const { id } = request.params;

    if (!Types.ObjectId.isValid(id))
      return response.status(406).json(`ID: ${id} is incorrect`);

    await connect();

    try {
      const quiz: IQuizType = await Quiz.findOne({
        _id: id,
      });

      if (!quiz) {
        return response.status(406).json(`Quiz was not found`);
      }

      const questions: IQuestionType[] = await Question.find(
        {
          _id: { $in: quiz.questions },
        },
        // {
        //   correct_answer: false,
        // },
      );

      return response.status(200).json({
        id: quiz._id,
        name: quiz.name,
        subject: quiz.subject,
        questions,
      });
    } catch (error) {
      return error;
    }
  },
  create: async (request: Request, response: Response) => {
    console.log('Criando nova categoria de Questionário');
    const { name, subject } = request.body;

    await connect();

    const quiz: IQuizType = await Quiz.create({
      name: name.toLowerCase(),
      subject: subject.toLowerCase(),
    });

    return response.status(201).json(quiz);
  },
};

export default QuizController;

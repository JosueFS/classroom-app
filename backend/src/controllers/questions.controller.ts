import { Request, Response } from 'express';

import connect from '../services/mongodb';

import Quiz, { QuizType } from '../models/quiz.model';
import Question, { QuestionType } from '../models/question.model';

interface IRequestQuestionType extends QuestionType {
  subject: string;
}

const QuestionsController = {
  index: async (request: Request, response: Response) => {
    console.log('Acessando endpoint de questões');
    await connect();

    const questionsList = await Question.find();

    return response.status(200).json(questionsList);
  },
  checkAnswer: async (request: Request, response: Response) => {
    console.log('Verificando a resposta correta');
    const { id } = request.params;
    const { answer } = request.body;
    await connect();

    const [question]: QuestionType[] = await Question.find(
      {
        _id: id,
      },
      {
        answers: false,
        question: false,
      },
    );

    if (String(answer) === question.correct_answer) {
      return response.status(200).json({
        isCorrectAnswer: true,
      });
    }

    return response.status(200).json({
      isCorrectAnswer: false,
    });
  },
  create: async (request: Request, response: Response) => {
    console.log('Criando nova questão');
    const { subject, question, answers, correct_answer }: IRequestQuestionType =
      request.body;

    await connect();

    //Create a Question
    const newQuestion = await Question.create({
      question,
      answers,
      correct_answer,
    });

    //Get Question ID and add to related Subject Quiz
    const { _id } = newQuestion;

    let newQuiz = await Quiz.findOneAndUpdate(
      { subject: subject.toLowerCase() },
      { $push: { questions: _id } },
    );

    if (!newQuiz) {
      newQuiz = await Quiz.create({
        subject: subject.toLowerCase(),
        _id,
      });
    }

    return response.status(201).json({
      subject: subject.toLowerCase(),
      newQuestion,
    });
  },
};

export default QuestionsController;

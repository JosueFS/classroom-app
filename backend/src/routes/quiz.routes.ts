import { Router } from 'express';

import QuizController from '../controllers/quiz.controller';

const quizRouter = Router();

quizRouter.get('/', QuizController.index);

quizRouter.get('/:subject', QuizController.show);

quizRouter.post('/', QuizController.create);

export default quizRouter;

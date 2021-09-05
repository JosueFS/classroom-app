import { Router } from 'express';

import questionsRouter from './questions.routes';
import quizRouter from './quiz.routes';

const routes = Router();

routes.use('/api/questions', questionsRouter);
routes.use('/api/quiz', quizRouter);

export default routes;

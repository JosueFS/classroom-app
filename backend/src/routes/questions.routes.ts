import { Router } from 'express';

import QuestionsController from '../controllers/questions.controller';

const questionsRouter = Router();

questionsRouter.get('/:subject', QuestionsController.index);

questionsRouter.post('/:id', QuestionsController.checkAnswer);

questionsRouter.post('/', QuestionsController.create);

export default questionsRouter;

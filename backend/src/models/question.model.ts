import { Schema, model, Document, models, Model } from 'mongoose';

export interface IQuestionType extends Document {
  question: string;
  answers: string;
  correct_answer: string;
}

const questionSchema = new Schema({
  question: { type: 'String', required: true },
  answers: [{ type: 'String' }],
  correct_answer: { type: 'String', required: true },
});

const Question =
  models.question || model<IQuestionType>('question', questionSchema);

export default Question;

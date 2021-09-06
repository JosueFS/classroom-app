import { Schema, model, models } from 'mongoose';

export type QuestionType = {
  question: string;
  answers: {
    a: string | number;
    b: string | number;
    c: string | number;
    d: string | number;
  };
  correct_answer: string | number;
};

const questionSchema = new Schema({
  question: { type: 'string', required: true },
  answers: {
    a: { type: 'string', required: true },
    b: { type: 'string', required: true },
    c: { type: 'string', required: true },
    d: { type: 'string', required: true },
  },
  correct_answer: { type: 'string', required: true },
});

const Question = model<QuestionType>('question', questionSchema);

export default Question;

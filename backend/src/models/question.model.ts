import { Schema, model, models } from 'mongoose';

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

const Question = models.question || model('question', questionSchema);

export default Question;

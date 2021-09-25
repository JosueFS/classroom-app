import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IQuizType extends Document {
  name: string;
  subject: string;
  questions: mongoose.Types.ObjectId | string | number;
}

const quizSchema = new Schema({
  name: { type: 'string', required: true },
  subject: { type: 'string', required: true, unique: true },
  questions: [
    { type: mongoose.Types.ObjectId, required: false, ref: 'questions' },
  ],
});

const Quiz = models.quiz || model<IQuizType>('quiz', quizSchema);

export default Quiz;

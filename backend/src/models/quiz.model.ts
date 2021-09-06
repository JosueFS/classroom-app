import mongoose, { Schema, model, models } from 'mongoose';

export type QuizType = {
  subject: string;
  questions: mongoose.Types.ObjectId | string | number;
};

const quizSchema = new Schema({
  subject: { type: 'string', required: true, unique: true },
  questions: [
    { type: mongoose.Types.ObjectId, required: false, ref: 'questions' },
  ],
});

const Quiz = model<QuizType>('quiz', quizSchema);

export default Quiz;

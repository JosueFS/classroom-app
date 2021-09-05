import mongoose, { Schema, model, models } from 'mongoose';

const quizSchema = new Schema({
  subject: { type: 'string', required: true, unique: true },
  questions: [
    { type: mongoose.Types.ObjectId, required: false, ref: 'questions' },
  ],
});

const Quiz = models.quiz || model('quiz', quizSchema);

export default Quiz;

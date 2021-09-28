import React, { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

import Modal from '../../Modal';

import * as S from './styles';
import LoadingSpinner from '../../LoadingSpinner';
import QuizResult from '../QuizResultModal';
import QuestionResultModal from '../QuestionResultModal';

type QuestionType = {
  question: string;
  answers: string[];
  correct_answer: string;
};

type QuestionResult = {
  question: string;
  answer: string;
  isCorrect: boolean;
};

export type QuizType = {
  subject: string;
  questions: QuestionType[];
};

interface IQuizResult {
  subject: string;
  questions: QuestionResult[];
  score: number;
}

interface IQuizProps {
  quiz: QuizType;
  quizResult: IQuizResult;
  setQuizResult: (obj: IQuizResult) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Quiz: React.FC<IQuizProps> = ({
  quiz,
  quizResult,
  setQuizResult,
  showModal = false,
  setShowModal,
}) => {
  const [showQuestionResultModal, setShowQuestionResultModal] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerValue, setAnswerValue] = useState('');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleCheckAnswer = useCallback(() => {
    console.log();
    const submittedQuestion = {
      question: quiz.questions[currentQuestion].question,
      answer: answerValue,
      isCorrect: quiz.questions[currentQuestion].correct_answer === answerValue,
    };

    const results: QuestionResult[] = quizResult.questions;
    let newScore = score;

    results.push(submittedQuestion);

    if (submittedQuestion.isCorrect) {
      newScore = score + 1;
      setIsCorrectAnswer(true);
      setScore(newScore);
    } else {
      setIsCorrectAnswer(false);
    }

    setQuizResult({
      subject: quiz.subject,
      questions: results,
      score: newScore,
    });

    console.log({
      subject: quiz.subject,
      questions: results,
      score: newScore,
    });

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    }

    setShowQuestionResultModal(true);

    setAnswerValue('');
  }, [
    answerValue,
    currentQuestion,
    quiz.questions,
    quiz.subject,
    quizResult.questions,
    score,
    setQuizResult,
  ]);

  const handleFinishQuiz = () => {
    setShowModal(false);
    setShowQuestionResultModal(false);
    setShowScore(true);
  };

  const getQuizQuestions = useCallback(async () => {
    setTotalQuestions(quiz.questions.length);
  }, [quiz.questions.length]);

  useEffect(() => {
    getQuizQuestions();
  }, [getQuizQuestions]);

  return (
    <S.Container>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        {quiz.subject ? (
          <>
            <div className="subject">
              <span>
                {console.log(
                  `${quiz.questions.length > quizResult?.questions?.length}`,
                )}
                {quiz.subject} /
                {`${quizResult?.questions?.length} + ${quiz.questions.length}`}
                Multiplicação
              </span>
              <h3>
                Questão {currentQuestion + 1}/{quiz.questions.length}
              </h3>
              <h4>{quiz.questions[currentQuestion].question}</h4>
            </div>

            <div className="answers-list">
              {quiz.questions[currentQuestion].answers.map(answer => (
                <button
                  key={uuid()}
                  type="button"
                  className={`answer ${
                    answer === answerValue ? 'selected' : ''
                  }`}
                  onClick={() => setAnswerValue(answer)}
                >
                  <span>{answer}</span>
                  <RiCheckboxBlankCircleLine />
                  <RiCheckboxCircleFill />
                </button>
              ))}
            </div>
            <button type="button" onClick={handleCheckAnswer}>
              Confirmar
            </button>
          </>
        ) : (
          <LoadingSpinner />
        )}

        {showQuestionResultModal && (
          <QuestionResultModal
            totalQuestions={totalQuestions}
            quizResult={quizResult}
            handleFinishQuiz={handleFinishQuiz}
            isCorrectAnswer={isCorrectAnswer}
            setShowQuestionResultModal={setShowQuestionResultModal}
            showQuestionResultModal={showQuestionResultModal}
          />
        )}
      </Modal>

      {showScore && (
        <QuizResult
          quizResults={quizResult}
          showScore={showScore}
          setShowScore={setShowScore}
        />
      )}
    </S.Container>
  );
};

export default Quiz;

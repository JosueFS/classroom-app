import React from 'react';
import { FaArrowLeft, FaList } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import Modal from '../../Modal';

import * as S from './styles';

type QuestionResult = {
  question: string;
  answer: string;
  isCorrect: boolean;
};

interface IQuizResult {
  subject: string;
  questions: QuestionResult[];
  score: number;
}

interface IQuizResultProps {
  quizResults: IQuizResult;
  showScore: boolean;
  setShowScore: (isVisible: boolean) => void;
}

const QuizResult: React.FC<IQuizResultProps> = ({
  quizResults,
  showScore,
  setShowScore,
}) => {
  return (
    <S.Container>
      <Modal showModal={showScore} onClose={() => setShowScore(false)}>
        <div className="subject">
          <span>{quizResults.subject} / Multiplicação</span>
          <h3>
            Pontuação {quizResults.score}/{quizResults.questions.length}
          </h3>
        </div>

        <section className="progress">
          <strong className="label">Questões</strong>
          {quizResults.questions.map(question => (
            <div className="progress__item" key={question.question}>
              <FaList size={32} />
              <div className="progress__item-text">
                <strong>{question.question}</strong>
                <span>Resposta: {question.answer}</span>
              </div>
              {question.isCorrect ? (
                <RiCheckboxCircleFill color="#0c0" size={32} />
              ) : (
                <MdCancel color="#C00" size={32} />
              )}
            </div>
          ))}
        </section>
        <button type="button" onClick={() => setShowScore(false)}>
          <FaArrowLeft size={24} />
          <span>Voltar para aula</span>
        </button>
      </Modal>
    </S.Container>
  );
};

export default QuizResult;

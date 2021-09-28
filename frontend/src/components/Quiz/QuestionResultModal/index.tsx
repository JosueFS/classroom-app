import React from 'react';
import { MdCancel } from 'react-icons/md';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import Modal from '../../Modal';

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

interface IQuestionResultModal {
  totalQuestions: number;
  quizResult: IQuizResult;
  isCorrectAnswer: boolean;
  showQuestionResultModal: boolean;
  setShowQuestionResultModal: (boolean: boolean) => void;
  handleFinishQuiz: () => void;
}

const QuestionResultModal: React.FC<IQuestionResultModal> = ({
  totalQuestions,
  quizResult,
  isCorrectAnswer,
  showQuestionResultModal,
  setShowQuestionResultModal,
  handleFinishQuiz,
}) => {
  return (
    <Modal
      showModal={showQuestionResultModal}
      onClose={() => setShowQuestionResultModal(false)}
    >
      <div
        className={
          isCorrectAnswer
            ? 'modal-correct answer-result'
            : 'modal-incorrect answer-result'
        }
      >
        {isCorrectAnswer ? (
          <RiCheckboxCircleFill color="#0c0" size={40} />
        ) : (
          <MdCancel color="#C00" size={40} />
        )}
        <h3>{isCorrectAnswer ? 'Resposta correta!' : 'Resposta incorreta'}</h3>
        <span>
          {isCorrectAnswer
            ? 'Continue se esforçando pois o aprendizado deve ser contínuo!'
            : 'Você pode revisar o conteúdo novamente ou tirar dúvidas com o seu professor!'}
        </span>
        {totalQuestions < quizResult?.questions?.length + 1 ? (
          <button type="button" onClick={handleFinishQuiz}>
            Ver Resultado
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowQuestionResultModal(false)}
          >
            Próxima
          </button>
        )}
      </div>
    </Modal>
  );
};

export default QuestionResultModal;

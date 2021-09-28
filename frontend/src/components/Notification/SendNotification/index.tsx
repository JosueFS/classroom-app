/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaList } from 'react-icons/fa';

import api from '../../../services/api';

import Modal from '../../Modal';

import * as S from './styles';

type QuestionType = {
  question: string;
  answers: string[];
  correct_answer: string;
};

export type QuizType = {
  _id: string;
  name: string;
  subject: string;
  questions: QuestionType[];
};

interface INotificationModal {
  showNotificationModal: boolean;
  setShowNotificationModal: (boolean: boolean) => void;
  setIdQuizToSend: (id: string) => void;
}

const SendNotificationModal: React.FC<INotificationModal> = ({
  showNotificationModal,
  setShowNotificationModal,
  setIdQuizToSend,
}) => {
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);

  const getQuizzes = async () => {
    const response = await api.get('/quiz');
    setQuizzes(response.data);
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <S.Container showModal={showNotificationModal}>
      <Modal
        showModal={showNotificationModal}
        onClose={() => setShowNotificationModal(false)}
      >
        <div className="subject">
          <h3>Exercícios</h3>
        </div>
        {quizzes.length &&
          quizzes.map(quiz => (
            <div className="progress__item" key={quiz._id}>
              <FaList size={32} />
              <div className="progress__item-text">
                <strong>{quiz.name}</strong>
                <span>N° de Questões: {quiz.questions.length}</span>
                <strong>Enviar Quiz</strong>
                <FaArrowRight
                  size={24}
                  onClick={() => setIdQuizToSend(quiz._id)}
                />
              </div>
            </div>
          ))}

        <button type="button" onClick={() => setShowNotificationModal(false)}>
          Voltar para aula
        </button>
      </Modal>
    </S.Container>
  );
};

export default SendNotificationModal;

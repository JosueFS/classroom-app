import React, { useCallback, useRef, useState } from 'react';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';
import { MdCancel } from 'react-icons/md';

import Modal from '../../../components/Modal';

import * as S from './styles';

type QuestionType = {
  question: string;
  answers: {
    a: string | number;
    b: string | number;
    c: string | number;
    d: string | number;
  };
  correct_answer: string | number;
};

export type QuizType = {
  subject: string;
  questions: QuestionType[];
};

const Quiz: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const addSelectedClass = (selectedButton: HTMLButtonElement) => {
    const answersRefGroup = listContainerRef.current;
    [...answersRefGroup.children].forEach(element => {
      if (element === selectedButton) {
        element.classList.add('selected');
      } else {
        element.classList.remove('selected');
      }
    });
  };

  const handleSelectAnswer = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { currentTarget } = event;
      addSelectedClass(currentTarget);
    },
    [],
  );

  let modalResult;

  if (isCorrectAnswer) {
    modalResult = (
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <div className="modal-correct">
          <RiCheckboxCircleFill color="#0C0" size={96} />
          <h3>Resposta correta!</h3>
          <span>
            Continue se esforçando pois o aprendizado deve ser contínuo!
          </span>
        </div>
      </Modal>
    );
  } else {
    modalResult = (
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <div className="modal-incorrect">
          <MdCancel color="#C00" size={96} />
          <h3>Opção incorreta!</h3>
          <span>
            Você pode revisar o conteúdo novamente ou tirar dúvidas com o seu
            professor!
          </span>
        </div>
      </Modal>
    );
  }

  return (
    <S.Container>
      <div className="subject">
        <span>Matemática / Números Pares</span>
        <h3>Questão 1/3</h3>
        <span>Qual desses números é par?</span>
      </div>

      <div className="answers-list" ref={listContainerRef}>
        <button
          type="button"
          className="answer selected"
          onClick={handleSelectAnswer}
          value={13}
        >
          <span>A. 13</span>
          <RiCheckboxBlankCircleLine />
          <RiCheckboxCircleFill />
        </button>

        <button
          type="button"
          className="answer"
          onClick={handleSelectAnswer}
          value={27}
        >
          <span>B. 27</span>
          <RiCheckboxBlankCircleLine />
          <RiCheckboxCircleFill />
        </button>

        <button
          type="button"
          className="answer"
          onClick={handleSelectAnswer}
          value={1}
        >
          <span>C. 1</span>
          <RiCheckboxBlankCircleLine />
          <RiCheckboxCircleFill />
        </button>

        <button
          type="button"
          className="answer"
          onClick={handleSelectAnswer}
          value={32}
        >
          <span>D. 32</span>
          <RiCheckboxBlankCircleLine />
          <RiCheckboxCircleFill />
        </button>
      </div>
      <button type="button" onClick={() => setShowModal(true)}>
        Continuar
      </button>

      {modalResult}
    </S.Container>
  );
};

export default Quiz;

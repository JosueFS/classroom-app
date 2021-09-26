import React, { useRef } from 'react';

import * as S from './styles';

interface IModalProps {
  id?: string;
  showModal: boolean;
  onClose(): void;
}

const Modal: React.FC<IModalProps> = ({ showModal, onClose, children }) => {
  const modalContainerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalContainerRef.current) {
      onClose();
    }
  };

  return (
    <>
      {showModal && (
        <S.Container ref={modalContainerRef} onClick={handleOutsideClick}>
          <S.ModalContainer className="modal-container">
            <div className="modal-container_content">{children}</div>
          </S.ModalContainer>
        </S.Container>
      )}
    </>
  );
};

export default Modal;

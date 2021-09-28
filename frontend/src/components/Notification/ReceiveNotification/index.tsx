import React from 'react';

import Modal from '../../Modal';

import * as S from './styles';

interface INotificationModal {
  showNotificationModal: boolean;
  setShowNotificationModal: (boolean: boolean) => void;
}

const NotificationModal: React.FC<INotificationModal> = ({
  showNotificationModal,
  setShowNotificationModal,
}) => {
  return (
    <S.Container showModal={showNotificationModal}>
      <Modal
        showModal={showNotificationModal}
        onClose={() => setShowNotificationModal(false)}
      >
        <div>
          <h3>Nenhuma notificação</h3>
          <button type="button" onClick={() => setShowNotificationModal(false)}>
            Voltar para aula
          </button>
        </div>
      </Modal>
    </S.Container>
  );
};

export default NotificationModal;

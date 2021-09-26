import React, { useRef, useCallback } from 'react';
import { FaBook, FaUserFriends } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import * as S from './styles';

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const addActiveClass = (selectedButton: HTMLButtonElement) => {
    const buttonsRefGroup = containerRef.current;
    [...buttonsRefGroup.children].forEach(element => {
      if (element === selectedButton) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };

  const handleSelectedMenu = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { currentTarget } = event;
      addActiveClass(currentTarget);
    },
    [],
  );

  return (
    <S.Container ref={containerRef}>
      <button type="button" className="active" onClick={handleSelectedMenu}>
        <FaBook size={24} />
        <span>Aulas</span>
      </button>

      <button type="button" onClick={handleSelectedMenu}>
        <FaUserFriends size={24} />
        <span>Amigos</span>
      </button>

      <button type="button" onClick={handleSelectedMenu}>
        <MdSettings size={24} />
        <span>Configurações</span>
      </button>
    </S.Container>
  );
};

export default Footer;

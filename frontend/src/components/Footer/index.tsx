import React, { useRef, useCallback, ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonList: MenuButton[];
}

type MenuButton = {
  labelText: string;
  Icon?: React.ComponentType<IconBaseProps>;
};

const Footer: React.FC<IButtonProps> = ({ buttonList }) => {
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
      {buttonList.map((btn, index) => (
        <button
          type="button"
          onClick={handleSelectedMenu}
          className={index === 0 ? 'active' : ''}
        >
          {btn.Icon && <btn.Icon size={24} />}
          <span>{btn.labelText}</span>
        </button>
      ))}
    </S.Container>
  );
};

export default Footer;

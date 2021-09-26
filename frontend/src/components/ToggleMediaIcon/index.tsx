import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  originalIcon: React.ComponentType<IconBaseProps>;
  alternativeIcon: React.ComponentType<IconBaseProps>;
}

const ToggleMediaIcon: React.FC<IProps> = ({
  originalIcon: Icon,
  alternativeIcon: AlternativeIcon,
  ...rest
}) => {
  const [showOriginalIcon, setShowOriginalIcon] = useState(true);

  const handleDisableMedia = useCallback(() => {
    setShowOriginalIcon(!showOriginalIcon);
  }, [showOriginalIcon]);

  return (
    <button type="button" {...rest} onClick={handleDisableMedia}>
      {showOriginalIcon ? (
        <Icon color="#fff" size={32} />
      ) : (
        <AlternativeIcon color="#fff" size={32} />
      )}
    </button>
  );
};

export default ToggleMediaIcon;

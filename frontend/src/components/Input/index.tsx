import React, {
  InputHTMLAttributes,
  // useEffect,
  useState,
  useRef,
  useCallback,
  forwardRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, containerStyle, icon: Icon, ...rest },
  ref,
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [error] = useState('');

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <S.Container
      style={containerStyle}
      hasError={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={24} />}
      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={ref}
        {...rest}
      />
      {error && (
        <S.Error title={error}>
          <FiAlertCircle color="#C53030" size={20} />
        </S.Error>
      )}
    </S.Container>
  );
};

export default forwardRef(Input);

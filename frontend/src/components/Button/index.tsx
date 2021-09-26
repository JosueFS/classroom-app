import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  max-width: 320px;
  font-size: 18px;
  padding: 16px;
  border-radius: 10px;

  &.btn {
    border: none;
    font-weight: bold;
    color: ${props => props.theme.colors.defaultColors.white};
    background: ${props => props.theme.colors.medium};
    cursor: pointer;

    &.outline {
      margin-top: 32px;
      background: ${props => props.theme.colors.defaultColors.white};
      color: ${props => props.theme.colors.medium};
      border: 2px solid ${props => props.theme.colors.medium};
    }

    &:hover {
      color: ${props => props.theme.colors.defaultColors.white};
      background: ${props => props.theme.colors.medium}bb;
    }
  }
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  type = 'button',
  ...rest
}) => {
  return (
    <Container className={className} type={type} {...rest}>
      {children}
    </Container>
  );
};

export default Button;

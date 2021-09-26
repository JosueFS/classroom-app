import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 320px;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 16px;
  border-radius: 10px;

  background: ${props => props.theme.colors.defaultColors.white};
  border: 2px solid ${props => props.theme.colors.defaultColors.gray};
  color: ${props => props.theme.colors.defaultColors.gray};

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    color: ${props => props.theme.colors.medium};
    flex: 1;
    border: 0;
    &::placeholder {
      color: ${props => props.theme.colors.defaultColors.gray};
    }
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${componentProps =>
    componentProps.isFilled &&
    css`
      color: ${props => props.theme.colors.medium};
      border-color: ${props => props.theme.colors.medium};
    `}

  ${componentProps =>
    componentProps.isFocused &&
    css`
      color: ${props => props.theme.colors.medium};
      border-color: ${props => props.theme.colors.medium};

      input::placeholder {
        color: ${props => props.theme.colors.medium};
      }
    `}

    

  svg {
    margin: 0 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

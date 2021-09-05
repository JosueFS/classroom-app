import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.white};
  /* padding: 16px; */
  width: 100%;
  color: ${props => props.theme.colors.darkGreen};
  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}
  ${componentProps =>
    componentProps.isFocused &&
    css`
      color: ${props => props.theme.colors.darkGreen};
      border-color: #ff9011;
    `}
  ${componentProps =>
    componentProps.isFilled &&
    css`
      color: ${props => props.theme.colors.darkGreen};
    `}
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  input {
    background: transparent;
    color: ${props => props.theme.colors.darkGreen};
    flex: 1;
    border: 0;
    &::placeholder {
      color: ${props => props.theme.colors.mediumGreen};
    }
  }
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

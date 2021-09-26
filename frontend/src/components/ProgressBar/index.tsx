import React from 'react';
import styled, { css } from 'styled-components';

interface IProgressBarProps {
  done: number;
}

export const Container = styled.div<IProgressBarProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  div.progress {
    position: relative;
    height: 4px;
    width: 100%;
    background-color: ${props => props.theme.colors.defaultColors.gray};
    border-radius: 20px;

    > div.progress-done {
      background: ${props => props.theme.colors.defaultColors.selectedAnswer};
      border-radius: 20px;
      color: ${props => props.theme.colors.defaultColors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 0;
      transition: 1s ease 0.3s;

      ${ComponentProps =>
        ComponentProps.done &&
        css`
          width: ${ComponentProps.done}%;
        `}
    }
  }

  > span {
    font-size: 12px;
    color: ${props => props.theme.colors.defaultColors.gray};
    ${ComponentProps =>
      ComponentProps.done === 100 &&
      css`
        color: ${props => props.theme.colors.medium};
      `}
  }
`;

const ProgressBar: React.FC<IProgressBarProps> = ({ done = 50 }) => {
  return (
    <Container done={done}>
      <div className="progress">
        <div className="progress-done" />
      </div>
      <span>{done}%</span>
    </Container>
  );
};

export default ProgressBar;

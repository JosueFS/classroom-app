import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  &.loading-spinner,
  &.loading-spinner:after {
    border-radius: 50%;
    width: 2em;
    height: 2em;
  }

  position: relative;
  border-top: 0.25em solid ${props => props.theme.colors.defaultColors.white}44;
  border-right: 0.25em solid
    ${props => props.theme.colors.defaultColors.white}44;
  border-bottom: 0.25em solid
    ${props => props.theme.colors.defaultColors.white}44;
  border-left: 0.25em solid ${props => props.theme.colors.defaultColors.white};
  transform: translateZ(0);
  animation: spinner 1.25s infinite linear;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner: React.FC = () => {
  return <Container className="loading-spinner" />;
};

export default LoadingSpinner;

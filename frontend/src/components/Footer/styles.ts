import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 8px;
  /* background: ${props => props.theme.colors.darkGreen}; */

  display: flex;
  justify-content: space-around;
  gap: 4px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    max-width: 128px;
    gap: 4px;
    padding: 8px;
    font-size: 16px;
    background: transparent;
    border: none;
    border-radius: 4px;
    border-bottom: 3px solid transparent;
    cursor: pointer;

    &.active {
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.darkGreen};
      border-color: ${props => props.theme.colors.mediumGreen};
    }

    &:hover {
      background-color: ${props => props.theme.colors.mediumGreen};
      border-color: ${props => props.theme.colors.darkGreen};
    }
  }
`;

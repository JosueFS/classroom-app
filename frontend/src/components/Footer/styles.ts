import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  position: sticky;
  left: 0;
  bottom: 0;
  padding: 8px;
  border-radius: 8px 8px 0 0;
  background: ${props => props.theme.colors.dark};

  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  gap: 4px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 128px;
    gap: 4px;
    padding: 8px;
    color: ${props => props.theme.colors.light};
    font-size: 16px;
    background: transparent;
    border: none;
    border-radius: 4px;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.colors.medium};
      color: ${props => props.theme.colors.light};
      border-color: ${props => props.theme.colors.medium};
    }

    &.active {
      color: ${props => props.theme.colors.dark};
      background-color: ${props => props.theme.colors.light};
      border-color: ${props => props.theme.colors.medium};
    }
  }
`;

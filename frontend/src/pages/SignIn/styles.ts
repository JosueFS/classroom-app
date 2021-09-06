import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;

  img {
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 24px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.darkGreen};

  h4 {
    color: #fff;
  }

  input,
  button {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 10px;
  }

  button {
    font-weight: bold;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.mediumGreen};
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.mediumGreen}dd;
    }
  }
`;

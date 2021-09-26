import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 16px;
  gap: 24px;

  background-color: ${props => props.theme.colors.defaultColors.gray}22;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  img {
    height: 30vh;
    max-height: 400px;
    border-radius: 50%;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 300px;
  gap: 16px;
  padding: 8px;
  border-radius: 10px;

  h4 {
    color: ${props => props.theme.colors.dark};
  }
`;

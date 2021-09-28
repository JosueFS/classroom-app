import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.defaultColors.black}7;
  box-shadow: 0 8px 8px 0 rgba(0, 61, 125, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border: 1px solid rgba(0, 0, 0, 0.18);
`;

export const ModalContainer = styled.div`
  /* position: relative; */
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  z-index: 10;

  button.close {
    position: absolute;
    right: -5.5px;
    top: -5.5px;
    padding: 0;
    border-radius: 0;
    border: 0;
    width: 48px;
    height: 48px;
    background: transparent;
  }
`;

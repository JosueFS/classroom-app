import styled, { css } from 'styled-components';

interface IProps {
  showModal: boolean;
}

export const Container = styled.div<IProps>`
  visibility: hidden;

  ${props =>
    props.showModal &&
    css`
      visibility: visible;
    `};

  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 48px;

  text-align: center;

  div {
    div.modal-container {
      max-width: 90%;
      height: 120px;
      max-height: 90%;
      div.modal-container_content {
        div {
          display: flex;
          flex-direction: column;
          gap: 8px;

          button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 8px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.18);
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

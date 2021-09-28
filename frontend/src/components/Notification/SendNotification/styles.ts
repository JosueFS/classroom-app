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
      height: auto;
      max-height: 90%;
      background: ${props => props.theme.colors.light};
      padding: 16px 8px;

      div.modal-container_content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 0 16px;

        button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 8px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.18);
          text-transform: uppercase;
        }

        .progress__item {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-left: 16px;
          border-radius: 8px;
          gap: 8px;
          background: ${props => props.theme.colors.defaultColors.white};

          .progress__item-text {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            gap: 16px;

            > strong {
              font-size: 16px;
              text-transform: capitalize;
            }

            @media (max-width: 650px) {
              > strong {
                font-size: 12px;
              }

              span {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;

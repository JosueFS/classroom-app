import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 48px;

  /* text-align: center; */

  strong {
    font-weight: 500;
  }

  > svg {
    color: ${props => props.theme.colors.defaultColors.gray};
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 8px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.18);
    text-transform: uppercase;
  }

  div.modal-container {
    position: relative;
    max-width: 90vw;
    max-height: 80vh;
    margin: 15vh 5vw 5vh;
  }

  div.modal-container_content {
    > div {
      &:last-child {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
      }

      &.answer-result {
        position: relative;
        gap: 8px;
        padding: 0;

        > button {
          font-size: 16px;
          padding: 8px;
        }
      }

      > .modal-container {
        max-height: 30vh;
        max-width: 80vw;
        border: 1px solid ${props => props.theme.colors.dark};
      }

      &.modal-correct h3 {
        color: ${props => props.theme.colors.defaultColors.selectedAnswer};
      }

      &.modal-incorrect h3 {
        color: ${props => props.theme.colors.defaultColors.wrongAnswer};
      }

      span {
        color: ${props => props.theme.colors.defaultColors.gray};
        font-size: 12px;
      }
    }
    @media screen and (max-height: 750px) {
      div.modal-container_content {
        gap: 1px;
      }

      &.subject {
        gap: 8px;
        padding: 4px;
      }
    }

    section {
      padding: 8px 0;

      > strong.label {
        color: ${props => props.theme.colors.defaultColors.gray}bb;
        font-size: 12px;
        text-transform: uppercase;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;

        &.progress__item {
          background: ${props => props.theme.colors.defaultColors.white};
          padding: 8px;
          border-radius: 12px;

          strong {
            font-weight: 500;
          }
        }

        > svg {
          color: ${props => props.theme.colors.defaultColors.gray};
        }

        div.progress__item-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;

          span {
            font-size: 12px;
          }
        }
      }

      > p {
        font-weight: 500;
        margin-top: 8px;
      }
    }
  }
`;

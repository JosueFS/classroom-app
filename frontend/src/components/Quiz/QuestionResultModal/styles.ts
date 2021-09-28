import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 48px;

  text-align: center;

  div.subject {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    background: ${props => props.theme.colors.defaultColors.white};
    box-shadow: 0 8px 8px 0 rgba(0, 61, 125, 0.37);
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.18);
    text-align: left;

    span:first-child {
      text-transform: capitalize;
      color: ${props => props.theme.colors.defaultColors.gray};
      font-size: 12px;
    }

    h3 {
      /* font-size: 28px; */
    }

    span {
      font-size: 16px;
    }
  }

  div.answers-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style-type: none;

    button.answer {
      display: flex;
      justify-content: space-between;
      text-align: left;

      svg:nth-child(3) {
        display: none;
      }

      &.selected {
        border: 1px solid
          ${props => props.theme.colors.defaultColors.selectedAnswer};
        background: #d8ffdc;

        svg:nth-child(2) {
          display: none;
        }

        svg:last-child {
          display: inline;
          color: ${props => props.theme.colors.defaultColors.selectedAnswer};
        }
      }
    }
  }

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

  div.modal-container {
    position: relative;
    max-width: 90vw;
    max-height: 80vh;
    margin: 15vh 5vw 5vh;
  }

  div.modal-container_content {
    position: absolute;
    width: 90%;
    top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 4px;
      padding: 4px;

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
  }
`;

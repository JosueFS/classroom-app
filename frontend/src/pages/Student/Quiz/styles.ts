import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

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
      color: ${props => props.theme.colors.defaultColors.gray};
      font-size: 12px;
    }

    h3 {
      font-size: 28px;
    }

    span {
      font-size: 16px;
    }
  }

  div.answers-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
    padding: 16px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.18);
    text-transform: uppercase;
  }

  div.modal-container_content > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 16px;

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
`;

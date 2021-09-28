import styled, { css } from 'styled-components';

interface IProps {
  notifyIcon: boolean;
}

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 16px 8px 8px;
    color: ${props => props.theme.colors.defaultColors.white};
    z-index: 99;

    background: rgba(5, 31, 30, 0.8);
    background: linear-gradient(
      180deg,
      rgba(5, 31, 30, 0.7) 0%,
      rgba(0, 0, 0, 0) 80%
    );

    div {
      flex: 1;
      span {
        font-size: 12px;
      }
    }
  }

  main {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;

    .room-info {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 16px 0;
      background: rgb(4, 25, 24);
      background: linear-gradient(
        180deg,
        rgba(4, 25, 24, 0) 0%,
        rgba(5, 31, 30, 0.75) 100%
      );
    }

    .controller-list {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 16px;

      .controller-list__button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;
        width: 64px;
        padding: 8px;
        border: none;
        border-radius: 50%;
        background: ${props => props.theme.colors.defaultColors.black}44;
        backdrop-filter: blur(4px);

        &.phone {
          background: ${props => props.theme.colors.defaultColors.wrongAnswer};

          svg {
            transform: rotate(-135deg);
          }
        }
      }
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: ${props => props.theme.colors.defaultColors.white};

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .rec .rec-item-wrapper {
      .student-list__card {
        position: relative;
        height: 112px;
        width: 100%;
        max-width: 96px;
        border-radius: 8px;
        color: ${props => props.theme.colors.defaultColors.white};
        background-color: ${props => props.theme.colors.defaultColors.gray}bb;

        img {
          position: absolute;
          /* width: 100%; */
          height: 96px;
          margin: 0 auto;
          bottom: 0;
          left: 0;
        }

        div {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          bottom: 0;
          padding: 4px;

          background: ${props => props.theme.colors.dark}44;
          background: linear-gradient(
            180deg,
            ${props => props.theme.colors.dark}00 0%,
            ${props => props.theme.colors.dark}44 50%
          );

          span {
            font-size: 12px;
            line-height: 16px;
          }

          svg:last-child {
            margin-left: auto;
          }
        }
      }
    }
  }
`;

export const NotifiableIcon = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  > svg {
    position: absolute;
  }

  .notification {
    bottom: 0;
    right: 24px;

    &.notify {
      display: none;
    }
  }

  ${props =>
    props.notifyIcon &&
    css`
      display: inline;
    `}
`;

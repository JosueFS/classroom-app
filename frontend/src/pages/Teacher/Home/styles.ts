import styled from 'styled-components';
import { lighten, rgba } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 16px; */
  background: ${props => props.theme.colors.dark};

  img.avatar {
    height: 48px;
    border-radius: 50%;
    background: ${props => props.theme.colors.light};
  }

  div.title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    color: ${props => props.theme.colors.defaultColors.white};

    div {
      display: flex;
      align-items: center;
      gap: 16px;

      p {
        background: rgba(0, 61, 125, 0.15);
        box-shadow: 0 8px 8px 0 rgba(0, 61, 125, 0.37);
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(2.5px);
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.18);
      }
    }

    svg {
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.colors.defaultColors.wrongAnswer};
      }
    }
  }

  main.class-content {
    width: 100%;
    height: 100%;
    padding: 16px;
    background: ${props => lighten(0.09, props.theme.colors.light)};
    border-radius: 24px 24px 0 0;

    > div.container {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      gap: 16px;

      > a {
        min-height: 80px;
        border-radius: 16px;
        padding: 16px;
        text-decoration: none;
        color: ${props => props.theme.colors.defaultColors.white};
        margin-bottom: 16px;

        &.class {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }

        background: ${props => props.theme.colors.dark};
        background: linear-gradient(
          0deg,
          ${props => rgba(props.theme.colors.dark, 1)} 0%,
          ${props => rgba(props.theme.colors.medium, 1)} 100%
        );
        box-shadow: 0 0 8px 3px ${props => rgba(props.theme.colors.dark, 0.4)};
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(2.5px);
        border-radius: 10px;
        border: 1px solid
          ${props => rgba(props.theme.colors.defaultColors.black, 0.4)};

        > h5 {
          grid-area: 1 / 1 / 2 / 3;
        }

        > p {
          margin-top: 4px;
          font-size: 14px;
        }

        img {
          margin-left: auto;
        }
      }
    }
  }
`;

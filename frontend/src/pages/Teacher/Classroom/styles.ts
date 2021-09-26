import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 16px 8px 8px;
  }

  .react-tabs {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    position: relative;

    display: grid;
    place-items: center;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    padding: 8px;
  }

  .react-tabs #marker {
    content: '';
    position: absolute;
    height: 3px;
    width: 0;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.medium};
    transition: 0.2s;
  }

  .react-tabs__tab {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.defaultColors.gray};
    list-style: none;
    padding: 4px;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    background: #fff;
    color: ${props => props.theme.colors.medium};
  }

  .react-tabs__tab--disabled {
    color: ${props => props.theme.colors.defaultColors.gray}88;
    cursor: default;
  }

  .react-tabs__tab-panel {
    display: none;
    height: 100%;
    padding: 8px;
    border-radius: 24px 24px 0 0;
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.medium}22;

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
          color: ${props => props.theme.colors.medium};
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

  .react-tabs__tab-panel--selected {
    display: flex;
    flex-direction: column;
  }

  img.students {
    background: ${props => props.theme.colors.medium};
    height: 32px;
    border-radius: 50%;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  > button {
    max-width: 100%;
    margin: 0 auto;
  }
`;

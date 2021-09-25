import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    margin: 0 auto;
    
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  button,
  input,
  textarea {
    font: 400 16px 'Ubuntu', sans-serif;
  }

  h1 {
    font-size: clamp(2.4rem, 2.4rem + 4vw, 16rem);
  }

  h2 {
    font-size: clamp(2.2rem, 1.5rem + 1.8vw, 8rem);
  }

  h3 {
    font-size: clamp(2rem, 1.4rem + 1.6vw, 6rem);
  }

  h4 {
    font-size: clamp(1.8rem, 1.2rem + 1.4vw, 2.4rem);
  }

  h5 {
    font-size: clamp(1.6rem, 1.1rem + 1.1vw, 3rem);
  }

  h6 {
    font-size: clamp(1rem, 0.8rem + 0.5vw, 2rem);
  }
`;

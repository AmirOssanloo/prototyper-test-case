import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app-root {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.grey100};
    color: ${({ theme }) => theme.grey800};
    font-size: 1.6rem;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    line-height: 1.4;
  }

  h1 {
    margin-bottom: 2.6rem;
    padding-bottom: 0.6rem;
    font-size: 3.2rem;
    font-weight: 400;
    border-bottom: 1px solid ${({ theme }) => theme.grey300};
  }

  h2 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export default GlobalStyle;

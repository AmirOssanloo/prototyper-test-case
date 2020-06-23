import { createGlobalStyle } from 'styled-components';
import theme from './theme';

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
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.4;
  }
`;

export default GlobalStyle;

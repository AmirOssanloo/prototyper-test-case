import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    list-style: none;
    border: none;
    outline: none;
    text-decoration: none;
  }

  *:focus {
    outline: none;
  }
`;

export default ResetStyle;

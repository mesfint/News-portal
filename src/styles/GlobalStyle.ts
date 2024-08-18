// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

   /* Base styles */
  html,body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.textColor};
    line-height: 1.5;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
    

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.linkColor};
  }
   
`;

export default GlobalStyle;

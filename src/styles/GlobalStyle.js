import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
  }

  body {
    background: ${({theme}) => theme.colors.backgroundGradient};
    color: white;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

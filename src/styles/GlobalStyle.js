import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundGradient};
    background-attachment: fixed;
    background-size: cover;
    color: white;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

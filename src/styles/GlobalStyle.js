import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background: ${({ theme }) => theme.colors.linearGradient};
    background-attachment: fixed;
    background-size: cover;
    color: white;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    width: 100%;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image:
      radial-gradient(circle at center, rgba(255, 255, 255, .2) 1.1px, transparent 1px);
    background-size: 5px 5px;
    background-position: 0 0;
    pointer-events: none;
    z-index: -1;
    opacity: 0.3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 5.5rem;
    margin-bottom: 1rem;
    letter-spacing: 1.1rem;
    text-align: center;

    
    @media (max-width: 1024px) {
      font-size: 4.5rem;
      letter-spacing: 0.8rem;
    }

    
    @media (max-width: 768px) {
      font-size: 3.5rem;
      letter-spacing: 0.5rem;
      margin-bottom: 2rem;
    }

    
    @media (max-width: 480px) {
      font-size: 2.4rem;
      letter-spacing: 0.3rem;
    }
  }
`

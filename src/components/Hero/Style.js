import styled from 'styled-components'

import Backgroud from '../assets/hero/Fundo-1200x780.png'

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Backgroud});
  background-size: cover;
  text-align: center;
  position: relative;
`

const Image = styled.img`
  max-width: 90%;
  height: auto;
  margin: 0.5rem 0;
`

const Button = styled.a`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.greenButton};
  border-radius: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkText};
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`
export { Container, Image, Button }

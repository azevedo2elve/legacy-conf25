import styled from 'styled-components'

import Backgroud from '../../assets/hero/Fundo-1200x780.png'

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
  display: flex;
  align-items: center;
  margin: 5rem 0;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.greenButton};
  border-radius: 5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentBlue};
  text-decoration: none;
  font-size: 3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  padding: 1rem 2rem;

  &:hover {
    transform: scale(1.05);
  }
`
const PositionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;
`

const PositionedImage = styled.img`
  position: absolute;
  height: auto;
`

const DivData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`

const DivLagoinha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p,
  strong {
    font-style: italic;
    font-size: 3rem;
  }
`

export {
  Container,
  Image,
  Button,
  PositionContainer,
  PositionedImage,
  DivData,
  DivLagoinha,
}

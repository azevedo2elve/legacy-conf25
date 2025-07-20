import Nav from './components/Nav'
import Hero from './components/Hero/Hero'

import styled from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 3rem;
  font-weight: bold;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Hero />
      <Container>
        <Title>LEGACY CONF25</Title>
      </Container>
    </>
  )
}

export default App

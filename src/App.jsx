// components
import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Legacy from './components/Legacy'
import FAQ from './components/FAQ'

// styles
import styled from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
        <About />
        <Legacy />
        <FAQ />
      </Container>
    </>
  )
}

export default App

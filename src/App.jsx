// components
import Nav from './sections/Nav'
import Hero from './sections/Hero/Hero'
import About from './sections/About'
import Legacy from './sections/Legacy/Legacy'
import FAQ from './sections/FAQ'
import Contato from './sections/Contato'
import Footer from './sections/Footer'

// styles
import styled from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Hero />
      <Container id="container">
        <About />
        <Legacy />
        <FAQ />
        <Contato />
      </Container>
      <Footer />
    </>
  )
}

export default App

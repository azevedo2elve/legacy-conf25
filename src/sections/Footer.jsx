import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000000;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const FooterText = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0 0.5rem;
    line-height: 1.4;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 legacy conf25 | TODOS DIREITOS RESERVADOS</FooterText>
    </FooterContainer>
  )
}

export default Footer

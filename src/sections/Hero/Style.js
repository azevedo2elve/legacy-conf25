import styled from 'styled-components'
import Backgroud from '../../assets/hero/Fundo-new-hero.png'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Backgroud});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  position: relative;
  scroll-margin-top: 0;
  z-index: 10;

  @media (max-width: 1024px) {
    padding-top: 6rem;
    background-size: cover;
  }

  @media (max-width: 768px) {
    padding-top: 5rem;
    min-height: 90vh;
    background-size: cover;
  }

  @media (max-width: 480px) {
    padding-top: 4rem;
    min-height: 85vh;
  }
`

export const Image = styled.img`
  max-width: 90%;
  height: auto;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    max-width: 95%;
    margin: 0.3rem 0;
  }

  @media (max-width: 480px) {
    max-width: 98%;
    margin: 0.2rem 0;
  }
`

export const NumberDayImage = styled.img.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  max-width: 5rem;
  height: auto;
  margin: 0.5rem 0;
  transform: ${props => props.isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.6s ease-out;
  transition-delay: 1.0s;

  @media (max-width: 1024px) {
    max-width: 4.5rem;
  }

  @media (max-width: 768px) {
    max-width: 4rem;
    margin: 0.3rem 0;
  }

  @media (max-width: 480px) {
    max-width: 3.5rem;
    margin: 0.2rem 0;
  }
`

export const LineImage = styled.img.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  max-width: 40rem;
  height: auto;
  margin: 0.5rem 0;
  transform: ${props => props.isVisible ? 'scaleX(1)' : 'scaleX(0)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.8s ease-out;
  transition-delay: 1.2s;

  @media (max-width: 1024px) {
    max-width: 35rem;
  }

  @media (max-width: 768px) {
    max-width: 25rem;
    margin: 0.3rem 0;
  }

  @media (max-width: 480px) {
    max-width: 20rem;
    margin: 0.2rem 0;
  }
`

export const MonthImage = styled.img.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  max-width: 10rem;
  height: auto;
  margin: 0.5rem 0;
  transform: ${props => props.isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.6s ease-out;
  transition-delay: 1.4s;

  @media (max-width: 1024px) {
    max-width: 9rem;
  }

  @media (max-width: 768px) {
    max-width: 7rem;
    margin: 0.3rem 0;
  }

  @media (max-width: 480px) {
    max-width: 6rem;
    margin: 0.2rem 0;
  }
`

export const LagoinhaLogoImage = styled.img`
  max-width: 4rem;
  height: auto;
  margin-right: 1rem;

  @media (max-width: 1024px) {
    max-width: 3.5rem;
    margin-right: 0.8rem;
  }

  @media (max-width: 768px) {
    max-width: 3rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 480px) {
    max-width: 2.5rem;
    margin-right: 0.3rem;
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.greenButton};
  border-radius: 5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentBlue};
  text-decoration: none;
  font-size: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    padding: 0.9rem 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0.8rem 1.6rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 0.7rem 1.4rem;
    margin: 1rem 0;
  }
`

export const PositionContainer = styled.div`
  position: relative;
  width: 80%;
  height: 40rem;

  @media (max-width: 1024px) {
    height: 35rem;
  }

  @media (max-width: 768px) {
    height: 28rem;
  }

  @media (max-width: 480px) {
    height: 25rem;
  }
`

export const PositionedImage = styled.img`
  position: absolute;
  height: auto;
`

export const LegacyImage = styled(PositionedImage).withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  top: 14%;
  left: 50%;
  transform: translateX(-50%) ${props => props.isVisible ? 'translateY(0)' : 'translateY(-50px)'};
  max-width: 40rem;
  z-index: 3;
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.8s ease-out;
  transition-delay: 0.2s;

  @media (max-width: 1024px) {
    max-width: 32rem;
    top: 12%;
  }

  @media (max-width: 768px) {
    max-width: 26rem;
    top: 10%;
  }

  @media (max-width: 480px) {
    max-width: 22rem;
    top: 10%;
  }
`

export const EstadualImage = styled(PositionedImage).withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  top: 35%;
  left: 48%;
  transform: translateX(-50%) ${props => props.isVisible ? 'translateY(0)' : 'translateY(50px)'};
  max-width: 35rem;
  z-index: 2;
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.8s ease-out;
  transition-delay: 0.4s;

  @media (max-width: 1024px) {
    max-width: 30rem;
    top: 31%;
    left: 49%;
  }

  @media (max-width: 768px) {
    max-width: 25rem;
    top: 30%;
    left: 50%;
  }

  @media (max-width: 480px) {
    max-width: 20rem;
    top: 28%;
    left: 50%;
  }
`

export const ConfImage = styled(PositionedImage).withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  top: 43%;
  left: 50%;
  transform: translateX(-50%) ${props => props.isVisible ? 'translateY(0) scale(1)' : 'translateY(0) scale(0.8)'};
  max-width: 35rem;
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;

  @media (max-width: 1024px) {
    max-width: 30rem;
    top: 41%;
  }

  @media (max-width: 768px) {
    max-width: 25rem;
    top: 38%;
  }

  @media (max-width: 480px) {
    max-width: 20rem;
    top: 36%;
  }
`

export const NumberImage = styled(PositionedImage).withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  /* Base styles */
  top: 66%;
  left: 57%;
  max-width: 10rem;
  transform: translateX(-50%) ${props => props.isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(30px) rotate(-10deg)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.8s ease-out;
  transition-delay: 0.8s;

  /* Ultra-wide screens (4K+) */
  @media (max-width: 3360px) { left: 58%; }
  @media (max-width: 2900px) { left: 60%; }
  @media (max-width: 2330px) { left: 62%; }

  /* Large desktop screens */
  @media (max-width: 1980px) { left: 63%; }
  @media (max-width: 1950px) { left: 65%; }
  @media (max-width: 1690px) { left: 66%; }
  @media (max-width: 1500px) { left: 67%; }
  @media (max-width: 1480px) { left: 68%; }
  @media (max-width: 1320px) { left: 69%; }
  @media (max-width: 1310px) { left: 70%; }
  @media (max-width: 1190px) { left: 72%; }
  @media (max-width: 1080px) { left: 74%; }

  /* Standard desktop and tablets */
  @media (max-width: 1024px) {
    left: 73%;
    max-width: 8rem;
    top: 65%;
  }

  @media (max-width: 872px) { left: 78%; }

  @media (max-width: 768px) {
    left: 75%;
    max-width: 6rem;
    top: 65%;
  }

  @media (max-width: 675px) { left: 77%; }
  @media (max-width: 620px) { left: 83%; }

  /* Mobile devices */
  @media (max-width: 480px) {
    left: 85%;
    max-width: 5rem;
    top: 60%;
  }

  @media (max-width: 360px) { left: 94%; }
`

export const DivData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin: 1.5rem 0;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    margin: 1rem 0;
  }
`

export const DivLagoinha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p,
  strong {
    font-style: italic;
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    p,
    strong {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    p,
    strong {
      font-size: 2rem;
    }
    gap: 0.3rem;
  }

  @media (max-width: 480px) {
    p,
    strong {
      font-size: 1.6rem;
    }
  }
`

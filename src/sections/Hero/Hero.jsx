import { useState, useEffect } from 'react'

// Imagens
import legacyImg from '../../assets/hero/Legacy.png'
import estadualImg from '../../assets/hero/Estadual-fundo.png'
import confImg from '../../assets/hero/Conf.png'
import number25Img from '../../assets/hero/25.png'
import number13Img from '../../assets/hero/13.png'
import setImg from '../../assets/hero/SET.png'
import lineImg from '../../assets/hero/line.png'
import lagoinhaLogo from '../../assets/hero/lagoinha-canoas.png'

import {
  Container,
  PositionContainer,
  LegacyImage,
  EstadualImage,
  ConfImage,
  NumberImage,
  DivData,
  NumberDayImage,
  LineImage,
  MonthImage,
  DivLagoinha,
  LagoinhaLogoImage,
  Button,
} from './Style'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Container id="hero">
      <PositionContainer id="images">
        <LegacyImage src={legacyImg} alt="LEGACY" isVisible={isVisible} />
        <EstadualImage src={estadualImg} alt="ESTADUAL (RS)" isVisible={isVisible} />
        <ConfImage src={confImg} alt="CONF" isVisible={isVisible} />
        <NumberImage src={number25Img} alt="25" isVisible={isVisible} />
      </PositionContainer>

      <DivData>
        <NumberDayImage src={number13Img} alt="13" isVisible={isVisible} />
        <LineImage src={lineImg} alt="line" isVisible={isVisible} />
        <MonthImage src={setImg} alt="SET" isVisible={isVisible} />
      </DivData>
      <DivLagoinha>
        <LagoinhaLogoImage src={lagoinhaLogo} alt="Lagoinha Canoas" />
        <p>
          LAGOINHA <strong>CANOAS</strong> RS
        </p>
      </DivLagoinha>
      <Button
        href="https://ticketgospel.com/comprar/498/legacy-conference-25-lagoinha-canoas?fbclid=PAZXh0bgNhZW0CMTEAAaev6gGs61p2pCXGY-b4nwMCP2eOxCTm0cNsk1Ot5Soh_zzaw-AeLx_u68zSAA_aem_4jqPva0xkUkyzdk-oNIu_g"
        target="_blank"
      >
        GARANTA SEU INGRESSO
      </Button>
    </Container>
  )
}

export default Hero

import {
  Container,
  Image,
  Button,
  PositionContainer,
  PositionedImage,
  DivData,
  DivLagoinha,
} from './Style'

// Imagens
import legacyImg from '../../assets/hero/Legacy.png'
import estadualImg from '../../assets/hero/Estadual-fundo.png'
import confImg from '../../assets/hero/Conf.png'
import number25Img from '../../assets/hero/25.png'
import number13Img from '../../assets/hero/13.png'
import setImg from '../../assets/hero/SET.png'
import lineImg from '../../assets/hero/line.png'
import lagoinhaLogo from '../../assets/hero/lagoinha-canoas.png'

const Hero = () => {
  return (
    <Container id="hero">
      <PositionContainer>
        <PositionedImage
          src={legacyImg}
          alt="LEGACY"
          style={{
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '40rem',
            zIndex: 3,
          }}
        />
        <PositionedImage
          src={estadualImg}
          alt="ESTADUAL (RS)"
          style={{
            top: '35%',
            left: '48%',
            transform: 'translateX(-50%)',
            maxWidth: '35rem',
            zIndex: 2,
          }}
        />
        <PositionedImage
          src={confImg}
          alt="CONF"
          style={{
            top: '43%',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '35rem',
          }}
        />
        <PositionedImage
          src={number25Img}
          alt="25"
          style={{
            top: '67%',
            left: '64%',
            transform: 'translateX(-50%)',
            maxWidth: '10rem',
          }}
        />
      </PositionContainer>

      <DivData>
        <Image src={number13Img} alt="13" style={{ maxWidth: '5rem' }} />
        <Image src={lineImg} alt="line" style={{ maxWidth: '40rem' }} />
        <Image src={setImg} alt="SET" style={{ maxWidth: '10rem' }} />
      </DivData>
      <DivLagoinha>
        <Image
          src={lagoinhaLogo}
          alt="Lagoinha Canoas"
          style={{ maxWidth: '4rem', marginRight: '1rem' }}
        />
        <p>
          LAGOINHA <strong>CANOAS</strong> RS
        </p>
      </DivLagoinha>
      <Button href="#ingresso">GARANTA SEU INGRESSO</Button>
    </Container>
  )
}

export default Hero

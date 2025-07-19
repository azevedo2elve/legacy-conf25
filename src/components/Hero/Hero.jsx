import { Container, Image, Button } from './Style'

// Imagens
import legacyImg from '../assets/hero/Legacy.png'
import estadualImg from '../assets/hero/Estadual-fundo.png'
import confImg from '../assets/hero/Conf.png'
import number25Img from '../assets/hero/25.png'
import number13Img from '../assets/hero/13.png'
import setImg from '../assets/hero/SET.png'
import lineImg from '../assets/hero/line.png'
import lagoinhaLogo from '../assets/hero/lagoinha-canoas.png'

const Hero = () => {
  return (
    <Container>
      <Image src={legacyImg} alt="LEGACY" />
      <Image src={estadualImg} alt="ESTADUAL (RS)" />
      <Image src={confImg} alt="CONF" />
      <Image src={number25Img} alt="25" />
      <Image src={number13Img} alt="13" />
      <Image src={lineImg} alt="line" />
      <Image src={setImg} alt="SET" />
      <Image src={lagoinhaLogo} alt="Lagoinha Canoas" />
      <Button href="#ingresso">GARANTA SEU INGRESSO</Button>
    </Container>
  )
}

export default Hero

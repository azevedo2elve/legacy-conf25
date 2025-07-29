import styled from 'styled-components'
import Section from '../components/Section'

const TitleAbout = styled.h2`
  margin-bottom: 1rem;
`
const TextAbout = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
  text-align: justify;

  p {
    font-size: 1.5rem;
  }
`

const About = () => {
  return (
    <Section id={'sobre'} className={'about'}>
      <TitleAbout>SOBRE A CONFERÊNCIA</TitleAbout>
      <TextAbout>
        <p>
          A Conferência Legacy é muito mais do que um evento — é um derramar de
          Deus sobre a vida de uma geração que deseja marcar a história com o
          poder do Espírito Santo.
        </p>
        <p>
          Organizada pelo Legacy Canoas, essa conferência tem como propósito
          reunir todos os jovens Legacy do Rio Grande do Sul para viverem juntos
          um tempo de unidade, avivamento, comunhão e direcionamento profético.
        </p>
        <p>
          É um convite para todos que anseiam por mais de Deus, por conexões
          verdadeiras e por fazer parte de algo maior: um legado eterno.
        </p>
      </TextAbout>
    </Section>
  )
}

export default About

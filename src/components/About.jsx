import styled from 'styled-components'

const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 1rem;
  margin: 10rem 0;
  max-width: 90rem;
`

const TitleAbout = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 5.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1.1rem;
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
    <DivAbout id="sobre">
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
    </DivAbout>
  )
}

export default About

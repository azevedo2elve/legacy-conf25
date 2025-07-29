import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Section from '../components/Section'

const TitleAbout = styled.h2.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme?.colors?.primary || '#FFFFFF'};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-300px)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 3s ease-out;
  transition-delay: 0.1s;
`
const TextAbout = styled.p.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  color: ${({ theme }) => theme?.colors?.primary || '#FFFFFF'};
  line-height: 1.5;
  text-align: justify;
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-250px)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 2s ease-out;
  transition-delay: 0.3s;

  p {
    font-size: 1.5rem;
  }
`

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Fallback: ativar animação após 2 segundos se o observer não funcionar
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true)
      }
    }, 2000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          clearTimeout(fallbackTimer)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1, // Reduzido para 10% para trigger mais cedo
        rootMargin: '0px 0px -20px 0px' // Margem menor
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      clearTimeout(fallbackTimer)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <Section id={'sobre'} className={'about'} ref={sectionRef}>
      <TitleAbout isVisible={isVisible}>SOBRE A CONFERÊNCIA</TitleAbout>
      <TextAbout isVisible={isVisible}>
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

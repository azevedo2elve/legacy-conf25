import React, { useState, useEffect, useRef } from 'react'
import Section from '../components/Section'
import styled from 'styled-components'
import { Plus, Minus } from 'lucide-react'

const FAQContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const FAQItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isVisible', 'delay'].includes(prop),
})`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(30px)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.6s ease-out;
  transition-delay: ${props => props.delay}s;
`

const Question = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text || '#fff'};
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  text-align: left;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.8rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 0.6rem 0;
  }
`

const Answer = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};

  p,
  a {
    font-size: 1.4rem;
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.colors.accentBlue || '#007bff'};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.highlightYellow};
    }
  }

  @media (max-width: 1024px) {
    p,
    a {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    p,
    a {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    p,
    a {
      font-size: 1.1rem;
    }
  }
`

const TitleFAQ = styled.h2.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme?.colors?.primary || '#FFFFFF'};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(50px)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.8s ease-out;
  transition-delay: 0.1s;
`

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    // Fallback: ativar animação após 2 segundos se o observer não funcionar
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true)
        // Ativar todos os itens gradualmente
        faqList.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems(prev => [...prev, index])
          }, index * 200)
        })
      }
    }, 2000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          clearTimeout(fallbackTimer)
          
          // Ativar itens um por um com delay
          faqList.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index])
            }, (index + 1) * 200) // +1 para começar depois do título
          })
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqList = [
    {
      question: 'Para qual faixa etária é a conferência?',
      answer:
        '<p>A LEGACY CONF25 é direcionada especialmente para jovens a partir dos 18 anos, mas todos são bem-vindos!</p>',
    },
    {
      question: 'Como faço para adquirir um ingresso?',
      answer:
        "<p>Você pode adquirir seu ingresso através do site de <a href='https://ticketgospel.com/comprar/498/legacy-conference-25-lagoinha-canoas?fbclid=PAZXh0bgNhZW0CMTEAAaev6gGs61p2pCXGY-b4nwMCP2eOxCTm0cNsk1Ot5Soh_zzaw-AeLx_u68zSAA_aem_4jqPva0xkUkyzdk-oNIu_g' target='_blank'>Ticket Gospel</a>.</p>",
    },
    {
      question: 'Onde será realizada a conferência?',
      answer:
        '<p>A conferência acontecerá na Igreja Lagoinha Canoas, no Rio Grande do Sul. O endereço é: AV. GUILHERME SCHELL, 3466 - FÁTIMA, CANOAS - RS.</p>',
    },
    {
      question: 'O que vai acontecer durante a conferência?',
      answer:
        '<p>Será um dia inteiro cheio da presença de Deus! Teremos duas sessões de culto (manhã e noite) e, durante a tarde, Workshops com temas variados voltados para capacitação da igreja e crescimento pessoal e ministerial. <br>Convidados especiais e líderes locais estarão conosco ministrando e compartilhando experiências inspiradoras.<br> Prepare-se para um ambiente de adoração profunda, ensino transformador e comunhão com o Corpo de Cristo!</p>',
    },
    {
      question: 'Haverá alimentação no local?',
      answer:
        '<p>Sim! Teremos praça de alimentação com food trucks e opções variadas para café da manhã, almoço e lanches. Mas fique à vontade para trazer seu próprio lanche, se preferir.</p>',
    },
    {
      question: 'Terá espaço para estacionar?',
      answer:
        '<p>Sim, o local conta com estacionamento gratuito. A entrada do estacionamento fica na rua ao lado R. Bartolomeu de Gusmão.</p>',
    },
    {
      question: 'Vai ter transmissão online?',
      answer:
        '<p>A princípio, a LEGACY CONF25 será exclusivamente presencial, pois queremos viver esse momento intensamente juntos. Mas fiquem ligados nas redes sociais para conteúdos exclusivos e bastidores!</p>',
    },
  ]

  return (
    <Section id={'faq'} className={'faq'} ref={sectionRef}>
      <TitleFAQ isVisible={isVisible}>DÚVIDAS FREQUENTES</TitleFAQ>
      <FAQContent>
        {faqList.map((faq, index) => (
          <FAQItem 
            key={index} 
            isVisible={visibleItems.includes(index)}
            delay={0.3 + (index * 0.2)}
          >
            <Question onClick={() => toggleFAQ(index)}>
              {index + 1 + '. ' + faq.question}
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </Question>
            {openIndex === index && (
              <Answer dangerouslySetInnerHTML={{ __html: faq.answer }} />
            )}
          </FAQItem>
        ))}
      </FAQContent>
    </Section>
  )
}

export default FAQ

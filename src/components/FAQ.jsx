import React, { useState } from 'react'
import styled from 'styled-components'
import { Plus, Minus } from 'lucide-react' // ícones (opcional)

const FAQContainer = styled.div`
  min-width: 80%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FAQItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`

const Question = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text || '#fff'};
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  font-weight: bold;
  font-size: 1.4rem;
`

const Answer = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.muted || '#ccc'};
  font-size: 0.95rem;
`

const TitleFAQ = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 5.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1.1rem;
`

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqList = [
    {
      question: 'Como faço para me cadastrar?',
      answer:
        "Você pode se cadastrar clicando no botão 'Criar Conta' no topo da página.",
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos cartões de crédito, débito e Pix.',
    },
    {
      question: 'É possível trocar um produto?',
      answer:
        'Sim, você pode solicitar a troca dentro de 7 dias após o recebimento.',
    },
  ]

  return (
    <FAQContainer id="faq">
      <TitleFAQ>DÚVIDAS FREQUENTES</TitleFAQ>
      {faqList.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
          </Question>
          {openIndex === index && <Answer>{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQContainer>
  )
}

export default FAQ

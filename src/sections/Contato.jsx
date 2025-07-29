import styled from 'styled-components'
import Section from '../components/Section'
import instagramIcon from '../assets/icon/instagram.svg'

const TitleContato = styled.h2`
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
  }
`

const SocialDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.8rem;
  margin-bottom: 4rem;
  max-width: 60rem;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0 2rem;
  }
`

const InstagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const InstagramButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: linear-gradient(
    45deg,
    #405de6,
    #5b51d8,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d,
    #f56040,
    #f77737,
    #fcaf45,
    #ffdc80
  );
  padding: 2rem 4rem;
  border-radius: 2rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1024px) {
    padding: 1.8rem 3.5rem;
    font-size: 1.8rem;
    gap: 1.3rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 3rem;
    font-size: 1.6rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.4rem;
    gap: 0.8rem;
  }
`

const InstagramIcon = styled.img`
  width: 3rem;
  height: 3rem;
  filter: brightness(0) invert(1);

  @media (max-width: 1024px) {
    width: 2.8rem;
    height: 2.8rem;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 480px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`

const InstagramHandle = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
  letter-spacing: 0.1rem;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`

const ContactInfo = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const ContactItem = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.4rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

function Contato() {
  return (
    <Section id={'contato'} className={'contato'}>
      <TitleContato>SIGA-NOS NAS REDES SOCIAIS</TitleContato>
      <SocialDescription>
        Acompanhe todas as novidades, bastidores e momentos especiais da
        Conferência Legacy 25. Conecte-se conosco e faça parte desta comunidade
        que está transformando vidas!
      </SocialDescription>
      <InstagramWrapper>
        <InstagramButton
          href="https://instagram.com/legacycanoas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon src={instagramIcon} alt="Instagram" />
          Seguir no Instagram
        </InstagramButton>

        <InstagramHandle>@legacycanoas</InstagramHandle>
      </InstagramWrapper>
      <ContactInfo>
        <ContactItem>
          📍 AV. GUILHERME SCHELL, 3466 - FÁTIMA, CANOAS - RS
        </ContactItem>
      </ContactInfo>
    </Section>
  )
}

export default Contato

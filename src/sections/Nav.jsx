import styled from 'styled-components'

// images
import logo from '../assets/logo/logo-legacy.png'
import lagoinhaCanoas from '../assets/logo/logo-lagoinha-conf.png'

const NavBar = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  height: 6rem;
  padding: 1rem 2rem;
  background-color: #df380b;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  font-weight: bold;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  z-index: 1000;

  @media (max-width: 1024px) {
    top: 1rem;
    height: 5rem;
    padding: 0.8rem 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    top: 1rem;
    height: 4.5rem;
    padding: 0.5rem 1rem;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    height: 4rem;
    padding: 0.5rem 0.8rem;
    gap: 0.5rem;
    width: 98%;
  }
`

const Logo = styled.img`
  height: 3.5rem;

  @media (max-width: 1024px) {
    height: 3rem;
  }

  @media (max-width: 768px) {
    height: 2.5rem;
  }

  @media (max-width: 480px) {
    height: 2.2rem;
  }
`

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.5rem;
  padding: 0 2rem;
  border-left: 0.2rem solid #fff;
  border-right: 0.2rem solid #fff;

  @media (max-width: 1024px) {
    gap: 1.2rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 0 1rem;
    border-left: 0.15rem solid #fff;
    border-right: 0.15rem solid #fff;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0 0.8rem;
  }
`

const NavItem = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.accentBlue};
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

const Nav = () => {
  return (
    <NavBar>
      <Logo src={logo} alt="Logo Legacy" />
      <NavDiv>
        <NavItem href="#hero">HOME</NavItem>
        <NavItem href="#sobre">SOBRE</NavItem>
        <NavItem href="#legacy">LEGACY</NavItem>
        <NavItem href="#faq">FAQ</NavItem>
        <NavItem href="#contato">CONTATO</NavItem>
      </NavDiv>
      <Logo
        src={lagoinhaCanoas}
        alt="Logo Lagoinha Canoas"
        style={{
          height: '2.5rem',
        }}
      />
    </NavBar>
  )
}

export default Nav

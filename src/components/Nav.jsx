import styled from 'styled-components'

// images
import logo from '../assets/logo-legacy.png'
import lagoinhaCanoas from '../assets/lagoinha-canoas.svg'

const NavBar = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  height: 3rem;
  padding: 0.5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.highlightYellow};
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-weight: bold;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`

const Logo = styled.img`
  height: 2.5rem;
`

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.5rem;
  padding: 0 2rem;
  border-left: 2px solid white;
  border-right: 2px solid white;
`

const NavItem = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accentBlue};
    transform: scale(1.3);
  }
`

const Nav = () => {
  return (
    <NavBar>
      <Logo src={logo} alt="Logo Legacy" />
      <NavDiv>
        <NavItem href="#home">HOME</NavItem>
        <NavItem href="#sobre">SOBRE</NavItem>
        <NavItem href="#faq">FAQ</NavItem>
        <NavItem href="#contato">CONTATO</NavItem>
      </NavDiv>
      <Logo src={lagoinhaCanoas} alt="Logo Lagoinha Canoas" />
    </NavBar>
  )
}

export default Nav

import styled from 'styled-components'

// images
import logo from '../assets/logo/Logo-conf.png'
import lagoinhaCanoas from '../assets/logo/logo-lagoinha-conf.png'

const NavBar = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  height: 6rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.highlightYellow};
  border-radius: 5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-weight: bold;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
`

const Logo = styled.img`
  height: 3.5rem;
`

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.5rem;
  padding: 0 2rem;
  border-left: 0.2rem solid #3f25b8;
  border-right: 0.2rem solid #3f25b8;
`

const NavItem = styled.a`
  text-decoration: none;
  color: #3f25b8;
  font-size: 1.2rem;
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

import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { data } from '../dataObject';
import { scrollTo } from './scroll';
import MobileHeader from './MobileHeader';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  /* max-width: 1440px; */
  width: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  padding: 2.4rem 2.3rem;

  .logo-mob {
    display: block;
  }

  .logo-web {
    display: none;
  }

  @media (min-width: 50em) {
    padding: 4.9rem 10rem;
    .logo-mob {
      display: none !important;
    }
    .logo-web {
      display: block;
    }
  }
`;

const HamburgerContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  cursor: pointer;
  align-self: flex-start;
  @media (min-width: 50em) {
    display: none;
  }
`;

const NavbarContainer = styled.nav`
  display: none;
  grid-auto-flow: column;
  gap: 20px;
  @media (min-width: 50em) {
    display: grid;
  }
`;
const NavButton = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
`;

const Hamburger = styled.div`
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 0.6rem;
`;

const LogoContainer = styled.div``;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { header } = data;
  return (
    <Wrapper>
      <LogoContainer>
        <img
          className='logo-mob'
          alt=''
          src='/logomob.png'
          width='124px'
          height='11.55px'
        />
        <img
          className='logo-web'
          alt=''
          src='/logoshortblack.png'
          width='65px'
          height='76px'
        />
      </LogoContainer>
      <HamburgerContainer onClick={() => setMenuOpen(true)}>
        <Hamburger />
        <Hamburger />
        <Hamburger />
      </HamburgerContainer>
      <NavbarContainer>
        {header.map((item, index) => (
          <NavButton onClick={() => scrollTo(index)} key={index}>
            {item.name}
          </NavButton>
        ))}
      </NavbarContainer>
      {menuOpen && <MobileHeader setMenuOpen={setMenuOpen} />}
    </Wrapper>
  );
};

export default Header;

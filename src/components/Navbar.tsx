// src/components/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  position: relative;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px; /* Wider menu */
    height: 100%;
    background-color: #333;
    padding: 20px;
    transition: right 0.3s ease-in-out;
    z-index: 1001; /* Ensure it appears above other content */
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;

  &:hover {
    color: #61dafb;
  }
`;

const BurgerMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 2002; /* Ensure it stays on top of the navigation */

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin-bottom: 5px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  /* Transformations for open/close state */
  span:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
  }

  span:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  span:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Ensure it covers the content but below the menu */
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav>
        <BurgerMenu isOpen={isOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </BurgerMenu>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </NavLinks>
      </Nav>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar;

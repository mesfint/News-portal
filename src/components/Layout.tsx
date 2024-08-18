// src/components/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;

  /* Larger screens: tablets and desktops */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
    max-width: 750px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 980px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    max-width: 1170px;
  }
`;

const Header = styled.header`
  background: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Main = styled.main`
  flex: 1;
  padding: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px; /* Increase padding on larger screens */
  }
`;

const Layout: React.FC = () => (
  <Container>
    <Header>
      <Logo>News Portal</Logo>
      <Navbar />
    </Header>
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </Container>
);

export default Layout;

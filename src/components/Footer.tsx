// src/components/Footer.tsx
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 My News Portal. All rights reserved.</p>
      <p>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;

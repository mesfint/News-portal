// src/pages/Contact.tsx
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Contact: React.FC = () => (
  <ContactContainer>
    <h1>Contact Us</h1>
    <p>If you have any questions or feedback, feel free to reach out to us!</p>
    <p>Email: contact@newsportal.com</p>
  </ContactContainer>
);

export default Contact;

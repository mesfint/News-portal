// src/pages/About.tsx
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const About: React.FC = () => (
  <AboutContainer>
    <h1>About Us</h1>
    <p>
      Welcome to our news portal! We are dedicated to bringing you the latest news and insights from around the world.
    </p>
    <p>
      Our team of experienced journalists and editors work tirelessly to ensure that you stay informed on the most important events and stories.
    </p>
  </AboutContainer>
);

export default About;

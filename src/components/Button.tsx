// src/components/Button.tsx
import React from 'react';
import styled from 'styled-components';

// Define a styled button with some default styles
const StyledButton = styled.button`
  background: #61dafb; /* Light blue color */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #4fa3d1; /* Darker blue color */
  }
`;

// Define the type for the props, including children and any button attributes
interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any; // Allow other props (e.g., onClick, type) to be passed
}

// Functional component using destructured children and other props
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    {children}
  </StyledButton>
);

export default Button;

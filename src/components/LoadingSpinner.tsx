// src/components/LoadingSpinner.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.spinnerBorder || '#f3f3f3'};
  border-top: 4px solid ${({ theme }) => theme.spinnerBorderTop || '#3498db'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const LoadingSpinner: React.FC = () => {
  return <Spinner />;
};

export default LoadingSpinner;

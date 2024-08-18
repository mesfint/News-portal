import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row; /* Row layout for larger screens */
    align-items: center; /* Align items in the center */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 25px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 30%; /* Adjust width for larger screens */
    margin-bottom: 0; /* Remove margin for larger screens */
    margin-right: 20px; /* Add space between image and text */
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

const CardContent = styled.p`
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`;

const CardActions = styled.div`
  margin-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto; /* Align actions to the right */
  }
`;

interface CardProps {
  id?: number;
  title: string;
  summary: string;
  image?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, summary, children, image }) => {
  return (
    <CardContainer>
      {image && <CardImage src={image} alt="Article" />}
      <div>
        <CardTitle>{title}</CardTitle>
        <CardContent>{summary}</CardContent>
        {children}
      </div>
    </CardContainer>
  );
};

export default Card;

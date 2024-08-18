import React from 'react';
import styled from 'styled-components';
import Button from './Button';




const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
  }
  const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
    const handleNextPage = () => onPageChange(currentPage + 1);
    const handlePrevPage = () => onPageChange(currentPage - 1);
    
  
  return (
    <PaginationControls>
    <Button onClick={handlePrevPage} disabled={currentPage === 1}>
      Previous Page
    </Button>
    <Button onClick={handleNextPage}>Next Page</Button>
  </PaginationControls>
  )
}

export default Pagination
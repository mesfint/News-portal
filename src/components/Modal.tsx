import React, { useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it appears above other content */
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 600px;
  position: relative;
  z-index: 1001; /* Higher than overlay */
  overflow-y: auto; /* Allow scrolling if content is too large */
  max-height: 90vh; /* Ensure the modal is not too tall */
`;
const Content = styled.p`
  margin-bottom: 20px; /* Adds space between the content and the link */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002; /* Ensure it appears above content */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  /* Add other styling as needed */
`;
const FullArticleLink = styled.a`
  display: block;
  margin-top: 15px;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image?: string;
  articleUrl?: string; // Link to the full article
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, image,articleUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isPlaceholderImage = image === 'https://via.placeholder.com/350x150';
 // Check if content is truncated and replace with link
 const displayContent = content.includes('… [+')
 ? content.split('…')[0] + '…'
 : content;

return (
 <ModalOverlay>
   <ModalContent>
     <CloseButton onClick={onClose}>X</CloseButton>
     <h2>{title || 'No Title Available'}</h2>
     {image && !isPlaceholderImage && (
       <Image src={image} alt={title} />
     )}
     <Content>{displayContent || 'No Content Available'}</Content>
     {articleUrl && content.includes('… [+') && (
       <FullArticleLink href={articleUrl} target="_blank" rel="noopener noreferrer">
         Read Full Article
       </FullArticleLink>
     )}
   </ModalContent>
 </ModalOverlay>
);
};

export default Modal;

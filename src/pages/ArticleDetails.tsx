import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../store';

const ArticleContainer = styled.div`
  padding: 20px;
  border: 1px solid red;
`;

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = useSelector((state: RootState) =>
    state.articles.list.find(article => article.id === Number(id))
  );

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <ArticleContainer>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      <p>{/* Display the full article content here */}</p>
    </ArticleContainer>
  );
};

export default ArticleDetails;

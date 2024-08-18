// src/components/AddArticle.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addArticle, Article } from '../features/articles/articlesSlice';
import Button from './Button';

const AddArticleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const AddArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newArticle: Article = {
      id: Date.now(), // Simple unique ID
      title,
      summary,
    };
    dispatch(addArticle(newArticle));
    setTitle('');
    setSummary('');
  };

  return (
    <AddArticleForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Article Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <Button type="submit">Add Article</Button>
    </AddArticleForm>
  );
};

export default AddArticle;

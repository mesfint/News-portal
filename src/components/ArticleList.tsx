import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Article } from '../features/articles/articlesSlice';
import useFetchArticles from '../hooks/useFetchArticles';
import { RootState } from '../store';
import Button from './Button';
import Card from './Card';
import LoadingSpinner from './LoadingSpinner';
import Modal from './Modal';
import Pagination from './Pagination';


const ArticleListContainer = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // gap: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;


  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

const ArticleList = () => {
    const articles = useSelector((state: RootState) => state.articles.list);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    

    const {loading,error}=useFetchArticles(currentPage);
    const articlesPerPage = 10;

    const currentArticles = articles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
      );

      if (loading) {
        return <LoadingSpinner />;
      }
    
      if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
      }

      const handleReadMore = (article: Article) => {
        setSelectedArticle(article);
        setIsModalOpen(true);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedArticle(null);
      };
    

  return (
    <>
    <ArticleListContainer>
    {currentArticles &&   currentArticles.map((article: Article) => (
    
      <Card key={article.id} title={article.title} summary={article.summary} image={article.image}>
        <Button onClick={() => handleReadMore(article)}>Read More</Button>
      </Card>
      
    ))}
  </ArticleListContainer>
  {selectedArticle && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedArticle.title}
          content={selectedArticle.content}
          image={selectedArticle.image}
          articleUrl={selectedArticle.url}
        />
      )}
  <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
  </>
  )
}

export default ArticleList
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setArticles } from '../features/articles/articlesSlice';


const useFetchArticles = (currentPage: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const articlesPerPage = 10;

  useEffect(() => {
      const fetchArticles = async () => {
          setLoading(true);
          setError(null);

          const cacheKey = `articles-page-${currentPage}`;
          const cachedData = localStorage.getItem(cacheKey);

          if (cachedData) {
              dispatch(setArticles(JSON.parse(cachedData)));
              setLoading(false);
              return;
          }

          try {
              const response = await axios.get(
                  'https://newsapi.org/v2/everything?q=ai&language=en&apiKey=f7a77facaf6444c49a649f81139c7fb5'
              );

              if (response.status === 200) {
                  const fetchedArticles = response.data.articles.map((article: any, index: number) => ({
                      id: index + 1 + (currentPage - 1) * articlesPerPage,
                      title: article.title || 'No title available',
                      summary: article.description || 'No description available',
                      content: article.content || 'No content available',
                      image: article.urlToImage || 'https://via.placeholder.com/350x150',
                      url: article.url || '',
                  }));
                  console.log("data",fetchedArticles)

                  localStorage.setItem(cacheKey, JSON.stringify(fetchedArticles));
                  dispatch(setArticles(fetchedArticles));
              } else {
                  setError('Failed to fetch articles. Please try again later.');
              }
          } catch (error) {
              setError('Failed to fetch articles. Please try again later.');
          } finally {
              setLoading(false);
          }
      };

      fetchArticles();
  }, [currentPage, dispatch, articlesPerPage]);

  return { loading, error };
};


  export default useFetchArticles;

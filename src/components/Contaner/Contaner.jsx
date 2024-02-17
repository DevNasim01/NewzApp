import React, { useContext, useEffect, useState } from 'react';
import Box from '../Box';
import styles from './Contaner.module.css';
import ErrorMsg from '../ErrorMsg';
import CatogryContext from '../../Context/CatogryContext';

const Container = ({ inputValue, setInputValue }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { catagory } = useContext(CatogryContext);

  useEffect(() => {
    setLoading(true);
    const trimmedInputValue = inputValue ? encodeURIComponent(inputValue.trim()) : '';
    let url = '';

    if (trimmedInputValue) {
      url = `https://newsapi.org/v2/everything?q=${trimmedInputValue}&apiKey=${import.meta.env.VITE_API_KEY}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${import.meta.env.VITE_API_KEY}`
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });

    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
      const height = navbarElement.offsetHeight;
      setNavbarHeight(height);
    }
  }, [inputValue, catagory]);

  useEffect(() => {
    if (!loading) {
      if (inputValue) {
        setInputValue(null);
      }
    }
  }, [loading, inputValue, setInputValue]);

  if (loading) {
    return (
      <div style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
        <div className='error'><h2>Loading...</h2></div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
        <ErrorMsg error={error} />
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
        <div className='error'><h2>404: PAGE NOT FOUND</h2></div>
      </div>
    );
  }

  return (
    <div style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
      <div className={styles.container}>
        <h1>Newz Feed</h1>
        {articles
          .filter(news => news.title && news.title !== "[Removed]")
          .map((news, index) => (
            news.title &&
            <Box
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
      </div>
    </div>
  );
};

export default Container;

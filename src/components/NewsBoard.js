import React, { useEffect, useState } from "react";
import NewsItem from './NewsItem';
import './NewsBoard.css'; 
const apiKey = process.env.REACT_APP_API_KEY;

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        console.log(data);
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();

  }, [category]);



  return (
    <div className="news-items">
      {articles.map((news, index) => (
        <NewsItem
          key={index} 
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          author={news.author}
          date={news.publishedAt}
          url={news.url}
        />
      ))}
    </div>
  );
}

export default NewsBoard;

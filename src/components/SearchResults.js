import React, {  useState
 } from "react";
import NewsItem from './NewsItem';
import './SearchResults.css'; 
const apiKey = process.env.REACT_APP_API_KEY;

function SearchResults({searchTerm}){
    const [searchResults, setSearchResults] = useState([]);

    if(searchTerm ==="" || searchTerm == null || searchTerm ==="" ){
      console.log("Search term empty");
      return;
    }

    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=${searchTerm.trim()}&apiKey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        console.log("******************************");
        console.log(data);
        console.log("**********************");
        setSearchResults(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }

    };

   
    fetchNews();
    

    return(
      <div className="search-results">
        {searchResults.map((news, index) => (
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
    )
}


export default SearchResults;
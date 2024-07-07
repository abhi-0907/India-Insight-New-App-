import React from 'react';
import image from '../image.png';
import './NewsItem.css'

const NewsItem = ({ title, description, src, url, author, date }) => {
  return (
    <div className='news-card'>
      <div className='news-image'>
      <img src={src ? src : image} alt="..." />
      </div>
      <div className="news-body">
        <h5 className="news-title">{title ? title.slice(0, 55) + "..." : "No Title"}</h5>
        <p className="news-text">{description ? description.slice(0, 90) + "..." : "No Description"}</p>
        <p className="news-author"><small> - By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
      </div>
      <div className='new-button-container'>
        <a href={url} rel="noreferrer" className="btn btn-primary news-button" target="_blank">Read more</a>
      </div>
    </div>
  );
};

export default NewsItem;

import React from "react";
import { useNavigate } from 'react-router-dom';
import './Search.css'


function Search({setSearchTerm}) {

  const navigate = useNavigate();

  const handleClick = () => {
    setSearchTerm(document.getElementById('search-input').value);
    console.log(document.getElementById('search-input').value);
    console.log("***************")
    navigate('/search'); 
  };


  return (
    <>
      <input
        id = 'search-input'
        type="text"
        placeholder="Search for news..."
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
}

export default Search;

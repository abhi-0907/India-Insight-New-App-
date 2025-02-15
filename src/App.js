import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar setCategory={setCategory} />
      <Search setSearchTerm={setSearchTerm}/>
      
      <div className="news-board">
        <Routes>
          <Route path="/" element={<NewsBoard category={category} />} />
          <Route path="/technology" element={<NewsBoard category="technology" />} />
          <Route path="/business" element={<NewsBoard category="business" />} />
          <Route path="/health" element={<NewsBoard category="health" />} />
          <Route path="/science" element={<NewsBoard category="science" />} />
          <Route path="/sports" element={<NewsBoard category="sports" />} />
          <Route path="/entertainment" element={<NewsBoard category="entertainment" />} />
          <Route path="/search" element={<SearchResults searchTerm = {searchTerm} />}/>
        </Routes>
      </div>

    </Router>
  );
};

export default App;

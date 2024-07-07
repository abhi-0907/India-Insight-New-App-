import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <Router>
      <Navbar setCategory={setCategory} /> {/* Pass setCategory function */}
      <div className="news-board">
        <Routes>
          <Route path="/" element={<NewsBoard category={category} />} />
          <Route path="/technology" element={<NewsBoard category="technology" />} />
          <Route path="/business" element={<NewsBoard category="business" />} />
          <Route path="/health" element={<NewsBoard category="health" />} />
          <Route path="/science" element={<NewsBoard category="science" />} />
          <Route path="/sports" element={<NewsBoard category="sports" />} />
          <Route path="/entertainment" element={<NewsBoard category="entertainment" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

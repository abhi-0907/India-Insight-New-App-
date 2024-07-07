import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" onClick={() => setCategory("general")}>
          <strong>India Insight</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setCategory("general")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link" onClick={() => setCategory("technology")}>Technology</Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link" onClick={() => setCategory("business")}>Business</Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link" onClick={() => setCategory("health")}>Health</Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link" onClick={() => setCategory("science")}>Science</Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link" onClick={() => setCategory("sports")}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

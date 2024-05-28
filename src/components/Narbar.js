import React from 'react';

const Navbar = ({ setCategory }) => {
  const navLinkStyle = {
    cursor: 'pointer'
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand" style={navLinkStyle}>
          <span className="badge fs-5" onClick={() => setCategory("general")}>
            <strong>India Insight</strong>
          </span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("general")}>Home</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item" onClick={() => setCategory("business")}>
              <div className="nav-link" style={navLinkStyle}>Business</div>
            </li>
            <li className="nav-item" onClick={() => setCategory("health")}>
              <div className="nav-link" style={navLinkStyle}>Health</div>
            </li>
            <li className="nav-item" onClick={() => setCategory("science")}>
              <div className="nav-link" style={navLinkStyle}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Assuming you have a Home component
import MentorMatch from './MentorMatch'; // Import the MentorMatch component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">PFP</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Resources</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Chat With Our Mentors</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="App-header">
          <h1 className="header-title">Welcome to PierForPeers</h1>
          <p className="header-subtitle">Your journey to success starts here!</p>
          <Link to="/mentor-match">
            <button className="cta-button">Find your mentor!</button>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor-match" element={<MentorMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

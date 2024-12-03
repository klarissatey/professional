import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Import CSS for styling

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">PFP</Link>
        <div>
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
          <Link className="navbar-item" to="/signin">Sign In</Link>
          <Link className="navbar-item" to="/signup">Sign Up</Link>
        </div>
      </nav>
      <h1>Welcome to the Mentor Matching App</h1>
      <p>Find the perfect mentor to guide you in your academic journey.</p>
      <Link to="/mentor-match">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
}

export default Home; 
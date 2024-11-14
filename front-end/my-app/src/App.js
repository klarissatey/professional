import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import MentorMatch from './MentorMatch';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';
import logo from './anchor.png';

function MainContent() {
  const location = useLocation();

  return (
    <div className="App">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="anchor" className="navbar-logo"></img>
          Anchor
        </Link>
        <div className="navbar-item-container">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/contact">Resources</Link>
          <Link className="navbar-item" to="/signin">Mentors</Link>
          <Link className="navbar-item" to="/signup">Profile</Link>
          <Link className="navbar-item" to="/signup">Connect</Link>
          <button className="navbar-item button-signup" type="button">Sign Up</button>
          <button className="navbar-item button-login">Log In</button>
        </div>
      </nav>

      {/* Render header only on the Home ("/") route */}
      {location.pathname === '/' && (
        <header className="App-header">
          <h1 className="header-title">Welcome to PierForPeers</h1>
          <p className="header-subtitle">Your journey to success starts here!</p>
          <Link to="/mentor-match">
            <button className="cta-button">Find your mentor!</button>
          </Link>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor-match" element={<MentorMatch />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;

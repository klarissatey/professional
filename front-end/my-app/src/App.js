import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import MentorMatch from './MentorMatch';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';

function MainContent() {
  const location = useLocation();

  return (
    <div className="App">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">PFP</Link>
        <div>
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
          <Link className="navbar-item" to="/signin">Sign In</Link>
          <Link className="navbar-item" to="/signup">Sign Up</Link>
          <Link className="navbar-item" to="/signup">Resources</Link>
          <Link className="navbar-item" to="/signup">Our Community</Link>
        </div>
      </nav>

      
      {/* Render header only on the Home ("/") route */}
      
      {location.pathname === '/' && (
        <header className="App-header">
          <h1 className="header-title">Welcome to Anchor</h1>
          <h1 className="header-title">A platform meant for</h1>
          <h1 className="header-title">connecting!</h1>
          {/* <Link to="/mentor-match">
            <button className="cta-button">Find your mentor!</button>
          </Link> */}

          <div className="box">
      <h1>First Time User?</h1>
      <div className="buttons">
        <button className="student-signup">Student Sign-Up</button>
        <button className="mentor-signup">Mentor Sign-Up</button>
      </div>
    </div>
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

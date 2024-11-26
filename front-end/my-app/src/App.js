import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import MentorMatch from './MentorMatch';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import './App.css';
import logo from './anchor.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


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
          <Link className="navbar-item" to="/profile">Profile</Link>
          <Link className="navbar-item" to="/signup">Connect</Link>
          <Link className="navbar-item" to = "/resources">Resources</Link> 
          <button className="navbar-item button-signup" type="button">Sign Up</button>
          <button className="navbar-item button-login">Log In</button>
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
        <Route path="/profile" element={<Profile />} />
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

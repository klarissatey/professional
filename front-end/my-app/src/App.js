import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

// Placeholder components for different routes
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function SignUp() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

function SignIn() {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="logo-container">
              <div className="logo-name">LOGO NAME</div>
              <div className="logo-catchphrase">Logo phrase/catchphrase</div>
            </div>
            <div className="navbar-links">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/signin">
                Sign In
              </Link>
              <Link className="navbar-item" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        <header className="App-header">
          <div className="header-content">
            <h1 className="header-title">Welcome to the Mentorship App</h1>
            <p className="header-subtitle">
              Your journey to success starts here!
            </p>
            <div className="auth-buttons">
              <Link to="/signup/mentor">
                <button className="cta-button">Sign up as a Mentor</button>
              </Link>
              <Link to="/signup/student">
                <button className="cta-button">Sign up as a Student</button>
              </Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

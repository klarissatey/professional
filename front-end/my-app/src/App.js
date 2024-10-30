import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Mentorship App</div>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1 className="header-title">Welcome to the Mentorship App</h1>
        <p className="header-subtitle">Your journey to success starts here!</p>
        <button className="cta-button">Get Started</button>
      </header>
    </div>
  );
}

export default App;

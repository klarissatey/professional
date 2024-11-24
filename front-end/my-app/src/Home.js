import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Import CSS for styling

import shipWheel from './ship-wheel.png';

function Home() {
  return (
    <div className="home-container">
      <div className="slogan"><strong>Anchor</strong> your future here.</div>
      {/* <Link to="/mentor-match">
        <button className="get-started-button">Get Started</button>
      </Link> */}
      <div className="home-content">
        <div className="home-quote">
          Whether you're ready to share your wisdom or seeking guidance for your college journey, join us in creating a community where dreams become reality. 
        </div>
        <img src={shipWheel} alt="ship wheel"></img>
        <div className="home-link">Click <strong>below</strong> to set sail!</div>
        <div className="button-container">
          <button className="home-button-signup" type="button" to="/signup"><strong>Student</strong> Sign Up</button>
          <button className="home-button-signup" type="button" to="/signup"><strong>Mentor</strong> Sign Up</button>
        </div>
        
      </div>
    </div>
  );
}

export default Home; 
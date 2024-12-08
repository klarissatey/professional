import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { useNavigate } from 'react-router-dom';

import shipWheel from './ship-wheel.png';

function Home() {
  const navigate = useNavigate();
    
    return (
    <div className="about-container">
        <header>
            <h1>Our Story</h1>
        </header>
        <div className="about-content">
            <div className="about-text">
                Pier was founded with a mission to guide first-generation high school students through the college application process.<br/>
                We aim to connect these students with mentors in college who understand how overwhelming this process can be. By prioritizing connections
                between mentors and mentees and making application resources easily accessible, we can ease the stress of high school students. <br/>
                We aim to foster an impactful community where students can confidently build their future. 
            </div>

            
      
    </div>
    </div>
  );
}

export default Home; 
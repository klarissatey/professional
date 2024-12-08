import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Import CSS for styling
import { useNavigate } from 'react-router-dom';

import shipWheel from './ship-wheel.png';

function Home() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/student-form');
    };  
  
    const handleMentorSignUp = () => {
      navigate('/mentor-form');
    }
    
    return (
    <div className="home-container">
      <div className="slogan">
        <svg width="101" height="91" viewBox="0 0 101 91" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect y="29" width="92.7456" height="72.3426" transform="rotate(-23.212 0 32.9005)" fill="url(#pattern0_161_1493)"/>
          <defs>
          <pattern id="pattern0_161_1493" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_161_1493" transform="matrix(0.00837138 0 0 0.0111111 0.123288 0)"/>
          </pattern>
          <image id="image0_161_1493" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFU0lEQVR4nO2cW4hVVRjHt5ahpdGVVDASI50ihvBSVobVQ9FFojK7gkEMSRI5BSJJBfWg0kuGkUUSFkFX6EISXmoSeushwuwyhGE1WWHmVMZU84vV+QZOM3uvvc/a63L2PusHB4Zhzfp/3//sWXvdkyQSiUQikUgkIgCXAs8Ae4Hf5KN+3gwsHikXMQSYBewkn+3ATFOdjga4EPiZ4vwELAwdd6UAzgB+pHXUFzMrdPyVAdiBObtCx18JgMsoT3xB5iG9izSOAKuAqcA0oFd+l8bTuUKdDvB5hnmrUsren1H2szDRVwhgMMO8qSll1dOdxuEw0VcI4PcWjJ6eUXYwTPQVAvgiw7zelLIPZJTdGyb6CgE8l2HeEXkBTpOPap//zCj7bOg82h5gMeW5OHQenTBgeS90/JUBmGk4BD+ghu+h468UwDwxrig/AHNDx11JgNOBdwqY/DYwI3S8lQdYoDF5fuj4agUZhI6rdhCNjkbXCuITHY2uFcQn2ti4Y4D1wPe45ztgndJMOg0aiftmXdJp4OdJHs1A0mlgNmkUjTYw+vEARq9POg1gArABOOTB4F/knXB00qkARwHnAD3AKy3ut8visGx8XK1WWyrd2wCWALc4qHc8cC6wUowfKGDsgJRdKX873kFct6qcbddbxOQhYFg9NR70ZmtMnu1Bf43kqnK+xrVe88qH2gjezEMedFPxoKuan2b+AC7wsZanlozSeLhuRjPW5Oa92Ge6Ep0ixxl0rKiL0cA9ObkqLya7EH6efIZcbZnFo9HA5cBfBfLdYlv4BorzLXBCVY0GTmpxeuA6W8KTgH20xpYKG/1Ci7l+AxxrQ3gtZsyzkrlHo4HzDXNdY2POOKuXkccbFTT6LcNc1YBpQhnhmzFn2ObZPzKwfKZRxWzK0jLir1KOuy0akYrF+ldQjpfLiH9dUnyrRSNSsVj/VsrRX2Ya80VgmzzZm4DlwH7N/rf5wDLV5QG6bU7ukIHlyaxuiX2Z5KJySmO/eLFJvNkmXpm30ykB9WWI77EmEsDoDM2skfD7LnVHxNU3l8bfLgYqoYxWuUhOTptEXQCPZCUNXFsjo5do8nQ+W6kCuEoTwMYaGf2kJs8rXek2B3CqJoADrtbl8Gi0ykEzUFN97ZNd6KYF8onvbxu/Rl+tye9jF5om7fS7DvSO1+hZnxNWJ7s0emtt6+kCUQugOi6yrNfla80QWJSTW5dNvSIB7dYE8wEwzqJWj0brLos64zTjhP/ysqXVSlBLc775HotaOzU62z3Od1xvS6vVN/MeTVBqtXiBpavY8rjEgs5CzUUrik/VZp+yOi7ezshGxvNKLit9lWtz40aEE0vozJWVbR1XJCFRvYycAA8BNxqa/CHF6TMxG7gJ+DWn7jeT0MjlJEX2y70GzGmhuSjyJI/my6Kr8MDZwOsF6lT/lacl7YBMLRZZnRiWp7RXulHTZfF3snThegre3JjHDqmrS+qeJFqL5J6P3QXj/cf7frs8gAepH6uTil2lVkWeStoV6fBvpPpsdrH114XZj5VcUQ6FivlRm6NaXyPH0dt725lBk25oWyDbfPtofz4CzkpqcEblPjmw024cBO5t+/a4FYBTZHlIN5/gCxXDE95WSkJA43LADfI0+eagnD8fc/1mbQEmArfJMbUim75NGZIVE3WqamLSydCYQLpDtmWp/cZl2Sd13V5mVq/2ADNkX4Ua1vcXMLZfyqq/ideymSCnarOuOh55sXUbVR75P8CdGqOXjyoecXAq7KVSlUbGAhw3ao1SLV9NSSkasdhex3bZNTQ2gMd2ORKJRCKRSCRJ418sI3M9W7Fc7QAAAABJRU5ErkJggg=="/>
          </defs>
        </svg>
        <strong>Anchor</strong> your future here.
      </div>
      <div className="home-content">
        <div className="home-quote">
          Whether you're ready to share your wisdom or seeking guidance for your college journey, join us in creating a community where dreams become reality. 
        </div>
        <img src={shipWheel} alt="ship wheel"></img>
        <div className="home-link">Click <strong>below</strong> to set sail!</div>
        <div className="button-container">
          <button className="home-button-signup" type="button" onClick={handleSignUp}><strong>Student</strong> Sign Up</button>
          <button className="home-button-signup"  type="button" onClick={handleMentorSignUp}><strong>Mentor</strong> Sign Up</button>
        </div>
        
      </div>
    </div>
  );
}

export default Home; 
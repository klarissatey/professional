import React from 'react';
import { Link } from 'react-router-dom';
import './Essays.css';

function Essays() {
  return (
    // <div>
    //   <h1>Essays Page</h1>
    //   <p>Welcome to the Essays page!</p>
    //   {/* <Link to="/resources">
    //     <button>Back to Resources</button>
    //   </Link> */}
    // </div>
    <div className="essays-container">
      <div className = "holder-for-title">
      <h1 className="essay-title">Essays</h1>
      </div>

      <div className="essays-content">
        <div className="essay-icon-1">
        <i class="bi bi-file-earmark"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-text"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-earmark"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-text"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-earmark"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>

        <div className="essay-icon-1">
        <i class="bi bi-file-earmark"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-text"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-earmark"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-text"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
        <div className="essay-icon-1">
        <i class="bi bi-file-earmark"></i>
        <h1 className="essay-name"> Personal Statement.pdf</h1>
        </div>
      
      </div>
   </div>
      
  );
}

export default Essays;


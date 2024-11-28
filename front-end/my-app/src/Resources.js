import React from 'react';
import './Resources.css';
import essays from './essays.png';
import scholarships from './scholarships.png';
import ext from './external-resources.png';


function Resources() {
  return (
    <div className="resources-container">
    <h1 className="resources-title">Resources</h1>
      <div className="resources-card">
        
        <div className="resources-sections">
          <div className="resource">
          <h2 className="descriptor"> Essays</h2>
            <img
              src={essays} // Replace with the correct path for your image
              alt="Essays"
              className="resource-image"
            />
            
          </div>
          <div className="resource">
          <h2 className="descriptor"> Scholarships</h2>
            <img
              src={scholarships}// Replace with the correct path for your image
              alt="Scholarships"
              className="resource-image"
            />
            
          </div>
          <div className="resource">
          <h2 className="descriptor-1"> Other Resources</h2>
            <img
              src={ext} // Replace with the correct path for your image
              alt="External Resources"
              className="resource-image"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;

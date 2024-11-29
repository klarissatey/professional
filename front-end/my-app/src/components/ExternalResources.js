import React from 'react';
import './ExternalResources.css';
import fafsaLogo from './fafsa.png'; // Example logo
import satActLogo from './sat-act.png'; // Example logo
import loansGrantsLogo from './loans-grants.png'; // Example logo

function ExternalResources() {
  return (
    <div className="external-resources-container">
      <div className = "holder-for-title">
      <h1 className="external-resources-title">External Resources</h1>
      </div>
      
      <div className="external-resources-content">
      
        {/* FAFSA Section */}
        <div className="resource-card">
          <img src={fafsaLogo} alt="FAFSA Help" className="resource-image" />
          <p className="resource-description">FAFSA 25-26 Help</p>
        </div>

        {/* SAT/ACT Section */}
        <div className="resource-card">
          <img src={satActLogo} alt="SAT/ACT Tutoring" className="resource-image" />
          <p className="resource-description">SAT/ACT Tutoring</p>
        </div>

        {/* Loans vs. Grants Section */}
        <div className="resource-card">
          <img src={loansGrantsLogo} alt="Loans vs. Grants" className="resource-image" />
          <p className="resource-description">Loans vs. Grants</p>
        </div>
      </div>
    </div>
  );
}

export default ExternalResources;

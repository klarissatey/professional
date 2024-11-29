import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Essays from './Essays';
import Scholarships from './Scholarships';
import ExternalResources from './ExternalResources';
import './Resources.css';
import essaysImg from './essays.png';
import scholarshipsImg from './scholarships.png';
import extImg from './external-resources.png';

function Resources() {
  return (
    <div>
      <h1 className="resources-title">Resources</h1>
      <Routes>
        {/* Main Resources Page */}
        <Route
          path="/"
          element={
            <div className="resources-container">
              <div className="resources-card">
                <div className="resources-sections">
                  <div className="resource">
                    <Link to="essays">
                      <button className="descriptor">Essays</button>
                    </Link>
                    <img src={essaysImg} alt="Essays" className="resource-image" />
                  </div>
                  <div className="resource">
                    <Link to="scholarships">
                      <button className="descriptor">Scholarships</button>
                    </Link>
                    <img src={scholarshipsImg} alt="Scholarships" className="resource-image" />
                  </div>
                  <div className="resource">
                    <Link to="external-resources">
                      <button className="descriptor">External Info</button>
                    </Link>
                    <img src={extImg} alt="External Resources" className="resource-image" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        {/* Nested Routes */}
        <Route path="essays" element={<Essays />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="external-resources" element={<ExternalResources />} />
      </Routes>
    </div>
  );
}

export default Resources;

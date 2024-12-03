import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-icon">
          <i className="bi bi-person-circle"></i>
        </div>
        <h1>Welcome back, ______!</h1>
      </div>
    </div>
  );
}

export default Profile;

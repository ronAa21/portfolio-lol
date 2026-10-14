import React from 'react';
import './MainProfile.css';

const MainProfile = () => {
  return (
    <div className="main-profile">
      <div className="profile-banner">
        <div className="banner-overlay"></div>
      </div>
      
      <div className="profile-content">
        <div className="profile-avatar-large">
          <div className="avatar-border">
            <div className="avatar-image"></div>
            <div className="level-badge">127</div>
          </div>
        </div>
        
        <div className="profile-details">
          <h2 className="summoner-name">VIDEO EDITOR</h2>
          <p className="tagline">Creative Storyteller & Visual Artist</p>
          
          <div className="status-indicator">
            <div className="status-dot online"></div>
            <span className="status-text">Available for Hire</span>
          </div>
          
          <p className="bio">
            Crafting compelling visual narratives through expert video editing. 
            Specialized in cinematic storytelling, color grading, and motion graphics.
            Let's bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;

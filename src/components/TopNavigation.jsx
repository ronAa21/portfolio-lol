import React from 'react';
import './TopNavigation.css';

const TopNavigation = () => {
  return (
    <nav className="top-navigation">
      <div className="nav-left">
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">PORTFOLIO</span>
        </div>
        
        <button className="nav-btn nav-btn-primary">PLAY</button>
        
        <div className="nav-links">
          <button className="nav-link">HOME</button>
          <button className="nav-link">TFT</button>
          <button className="nav-link">CLASH</button>
        </div>
      </div>
      
      <div className="nav-right">
        <button className="nav-icon-btn" title="Profile">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="7" r="4"/>
            <path d="M3 18c0-3.87 3.13-7 7-7s7 3.13 7 7"/>
          </svg>
        </button>
        
        <button className="nav-icon-btn" title="Messages">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect x="2" y="4" width="16" height="12" rx="2"/>
            <path d="M2 7l8 5 8-5"/>
          </svg>
        </button>
        
        <button className="nav-icon-btn" title="Settings">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="2"/>
            <path d="M10 2v2m0 12v2M18 10h-2M4 10H2m13.07-5.07l-1.41 1.41M8.34 13.66l-1.41 1.41m8.14 0l-1.41-1.41M8.34 6.34L6.93 4.93"/>
          </svg>
        </button>
        
        <div className="currency-display">
          <div className="currency-item">
            <span className="currency-icon gold">◆</span>
            <span className="currency-amount">6420</span>
          </div>
          <div className="currency-item">
            <span className="currency-icon rp">◈</span>
            <span className="currency-amount">0</span>
          </div>
        </div>
        
        <div className="profile-display">
          <div className="profile-avatar"></div>
          <div className="profile-info">
            <span className="profile-name">Summoner</span>
            <span className="profile-status online">Online</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;

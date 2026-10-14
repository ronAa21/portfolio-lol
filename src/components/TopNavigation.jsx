import React from 'react';
import './TopNavigation.css';
import logoIcon from '../visuals/LoL_icon.svg';

const TopNavigation = ({ onPlayClick }) => {
  return (
    <nav className="top-navigation">
      <div className="nav-main-bar">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logoIcon} alt="League of Legends" className="logo-icon" />
        </div>
        
        {/* Main Arrow Bar */}
        <div className="arrow-bar" onClick={onPlayClick}>
          <svg className="arrow-bar-svg" viewBox="0 0 140 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="arrowStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3FE7EE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#006D7D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0493A7" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="arrowStrokeHover" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#AFF5FF" />
                <stop offset="50%" stopColor="#46E6FF" />
                <stop offset="100%" stopColor="#00ADD4" />
              </linearGradient>
              <filter id="dropShadow">
                <feDropShadow dx="0" dy="1" stdDeviation="3" floodOpacity="0.5"/>
              </filter>
            </defs>
            
            {/* Arrow path with curve at start: M 0,0 L 103,0 L 118,14 L 103,28 L 0,28 C 10,14 0,0 0,0 Z */}
            <path 
              className="arrow-path"
              d="M 0,0 L 120,0 L 140,18 L 120,36 L 0,36 C 12,18 0,0 0,0 Z"
              fill="#1E2328"
              stroke="url(#arrowStroke)"
              strokeWidth="2"
              filter="url(#dropShadow)"
            />
          </svg>
          
          <span className="play-text">PLAY</span>
        </div>
        
        {/* Navigation Links beside PLAY button */}
        <div className="nav-links">
          <button className="nav-link">HOME</button>
          <button className="nav-link">ABOUT ME</button>
          <button className="nav-link">TECH</button>
        </div>
      </div>
      
      <div className="nav-secondary">
        
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
      </div>
    </nav>
  );
};

export default TopNavigation;

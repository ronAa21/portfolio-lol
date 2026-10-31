import React from 'react';
import './TopNavigation.css';

const TopNavigation = ({ onPlayClick, onHomeClick, onTechClick, onProfileClick, showWelcome = false, pageTitle = null }) => {
  return (
    <nav className="top-navigation">
      <div className="nav-main-bar">
        <div className="nav-left-section">
          {/* Logo Section */}
          <div className="logo-section">
            <span className="brand-text">AP</span>
          </div>
          
          {/* Main Arrow Bar - Static (non-clickable) */}
          <div className="arrow-bar static">
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
              
              <path 
                className="arrow-path"
                d="M 0,0 L 120,0 L 140,18 L 120,36 L 0,36 C 12,18 0,0 0,0 Z"
                fill="#1E2328"
                stroke="url(#arrowStroke)"
                strokeWidth="2"
                filter="url(#dropShadow)"
              />
            </svg>
            
            <span className="play-text">Hello</span>
          </div>
          
          {/* Navigation Links beside PLAY button */}
          <div className="nav-links">
            <button className="nav-link" onClick={onHomeClick}>HOME</button>
            <button className="nav-link" onClick={onTechClick}>PROJECTS</button>
          </div>
        </div>
        
        <div className="nav-right">
          <button className="nav-icon-btn" title="Profile" onClick={onProfileClick}>
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
          
          <div className="profile-display" onClick={onProfileClick} style={{ cursor: 'pointer' }}>
            <div className="profile-avatar-placeholder">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="12" r="6"/>
                <path d="M4 28c0-6 5.4-11 12-11s12 5 12 11"/>
              </svg>
            </div>
            <div className="profile-info">
              <span className="profile-name">Aaron</span>
              <span className="profile-status online">Online</span>
            </div>
          </div>
        </div>
      </div>
      
      {(showWelcome || pageTitle) && (
        <div className="nav-secondary">
          <div className="nav-secondary-left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span>{pageTitle || 'WELCOME TO TECH SKILLS: CHAPTER 1'}</span>
          </div>
          {showWelcome && (
            <div className="nav-secondary-right">
              <div className="tech-timer">
                <svg className="timer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>Ends in 18d 12h</span>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;

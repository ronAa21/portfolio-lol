import React, { useState, useEffect } from 'react';
import './MatchFoundScreen.css';

const MatchFoundScreen = ({ onAccept, onDecline }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      onDecline();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onDecline]);

  return (
    <div className="match-found-screen">
      <div className="match-found-overlay"></div>
      
      <div className="match-found-content">
        <div className="match-found-icon-wrapper">
          <div className="match-ring outer-ring"></div>
          <div className="match-ring middle-ring"></div>
          <div className="match-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 30L27 37L42 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h1 className="match-found-title">MATCH FOUND</h1>
        <p className="match-found-subtitle">Video Portfolio • Explore Projects</p>

        <div className="match-timer">
          <div className="timer-bar">
            <div 
              className="timer-fill" 
              style={{ width: `${(timeLeft / 10) * 100}%` }}
            ></div>
          </div>
          <span className="timer-text">0:{timeLeft.toString().padStart(2, '0')}</span>
        </div>

        <div className="match-actions">
          <button className="accept-btn" onClick={onAccept}>
            <span className="btn-text">ACCEPT!</span>
            <div className="btn-glow"></div>
          </button>
          
          <button className="decline-btn" onClick={onDecline}>
            DECLINE
          </button>
        </div>
      </div>

      <div className="match-background-effects">
        <div className="radial-burst"></div>
        <div className="radial-burst" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default MatchFoundScreen;

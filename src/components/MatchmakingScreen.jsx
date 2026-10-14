import React, { useEffect } from 'react';
import './MatchmakingScreen.css';

const MatchmakingScreen = ({ onMatchFound }) => {
  useEffect(() => {
    // Simulate matchmaking delay
    const timer = setTimeout(() => {
      onMatchFound();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onMatchFound]);

  return (
    <div className="matchmaking-screen">
      <div className="matchmaking-content">
        <div className="matchmaking-icon-wrapper">
          <div className="matchmaking-icon">
            <div className="hexagon-icon"></div>
            <div className="search-ring"></div>
            <div className="search-ring-2"></div>
          </div>
        </div>

        <h2 className="matchmaking-title">SEARCHING FOR MATCH</h2>
        <p className="matchmaking-subtitle">Finding the perfect project for you...</p>

        <div className="matchmaking-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="estimated-time">
          <span>Estimated: 0:03</span>
        </div>
      </div>

      <div className="matchmaking-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
};

export default MatchmakingScreen;

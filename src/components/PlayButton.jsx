import React, { useState } from 'react';
import './PlayButton.css';

const PlayButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className={`play-button ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="play-button-bg"></div>
      <div className="play-button-glow"></div>
      
      <div className="play-button-content">
        <div className="play-icon">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="currentColor">
            <path d="M2 0L22 14L2 28V0Z"/>
          </svg>
        </div>
        <span className="play-text">PLAY</span>
      </div>
      
      <div className="play-button-shine"></div>
    </button>
  );
};

export default PlayButton;

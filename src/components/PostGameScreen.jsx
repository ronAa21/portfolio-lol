import React from 'react';
import './PostGameScreen.css';

const PostGameScreen = ({ onExploreMore, onReturnHome }) => {
  const handleDownloadResume = () => {
    // This would trigger a resume download
    alert('Resume download would start here. Add your resume URL in the code!');
  };

  const handleContact = () => {
    // This would open the contact modal
    alert('Contact form would open here!');
  };

  return (
    <div className="post-game-screen">
      <div className="post-game-content">
        <div className="victory-banner">
          <div className="victory-icon">🏆</div>
          <h1 className="victory-title">VICTORY!</h1>
          <p className="victory-subtitle">You've Discovered My Creative Work</p>
        </div>

        <p className="victory-message">
          Thank you for taking the time to explore my portfolio. I hope you enjoyed 
          the journey through my projects. If you're interested in collaborating or 
          have any questions, I'd love to hear from you!
        </p>

        <div className="post-game-actions">
          <button className="post-game-btn primary" onClick={onExploreMore}>
            🎮 EXPLORE MORE PROJECTS
          </button>
          
          <button className="post-game-btn secondary" onClick={handleContact}>
            ✉️ CONTACT ME
          </button>
          
          <button className="post-game-btn tertiary" onClick={handleDownloadResume}>
            📄 DOWNLOAD RESUME
          </button>
          
          <button className="post-game-btn tertiary" onClick={onReturnHome}>
            🏠 RETURN TO HOME
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">8+</span>
            <span className="stat-label">Projects Showcased</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">6+</span>
            <span className="stat-label">Software Tools</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Passion & Creativity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostGameScreen;

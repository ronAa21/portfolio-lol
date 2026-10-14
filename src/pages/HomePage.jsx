import React from 'react';
import TopNavigation from '../components/TopNavigation';
import MainProfile from '../components/MainProfile';
import PlayButton from '../components/PlayButton';
import SoftwareTools from '../components/SoftwareTools';
import TechStacks from '../components/TechStacks';
import FriendsList from '../components/FriendsList';
import './HomePage.css';

const HomePage = ({ onPlayClick, skipIntro, setSkipIntro }) => {
  return (
    <div className="home-page">
      <TopNavigation />
      
      <div className="home-content">
        <div className="main-section">
          <div className="left-content">
            <MainProfile />
            
            <div className="play-section">
              <PlayButton onClick={onPlayClick} />
              
              <label className="skip-intro-checkbox">
                <input 
                  type="checkbox" 
                  checked={skipIntro}
                  onChange={(e) => setSkipIntro(e.target.checked)}
                />
                <span>Skip matchmaking animation</span>
              </label>
            </div>
            
            <div className="tabs-section">
              <SoftwareTools />
              <TechStacks />
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-overlay">
              <h1 className="hero-title">PLAY LEAGUE,<br />UNLOCK LEGENDS</h1>
              <button className="get-started-btn">GET STARTED</button>
            </div>
            <div className="champion-showcase">
              <div className="champion-art"></div>
            </div>
          </div>
        </div>
        
        <FriendsList />
      </div>
    </div>
  );
};

export default HomePage;

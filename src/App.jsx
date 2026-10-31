import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechPage from './pages/TechPage';
import ProfilePage from './pages/ProfilePage';
import ChampionSelect from './pages/ChampionSelect';
import ProjectDetails from './pages/ProjectDetails';
import PostGameScreen from './components/PostGameScreen';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('home'); // home, tech, profile, championSelect, projectDetails, postGame
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionToState = (newState) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setGameState(newState);
      setIsTransitioning(false);
    }, 300); // Match CSS transition duration
  };

  const handlePlayClick = () => {
    transitionToState('championSelect');
  };

  const handleTechClick = () => {
    transitionToState('tech');
  };

  const handleProfileClick = () => {
    transitionToState('profile');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setGameState('projectDetails');
  };

  const handleBackToSelect = () => {
    setSelectedProject(null);
    setGameState('championSelect');
  };

  const handleFinishExploring = () => {
    setGameState('postGame');
  };

  const handleReturnHome = () => {
    setSelectedProject(null);
    transitionToState('home');
  };

  return (
    <Router>
      <div className="app">
        {gameState === 'home' && (
          <div className={`page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <HomePage 
              onPlayClick={handlePlayClick}
              onTechClick={handleTechClick}
              onProfileClick={handleProfileClick}
            />
          </div>
        )}
        
        {gameState === 'tech' && (
          <div className={`page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <TechPage 
              onPlayClick={handlePlayClick}
              onHomeClick={handleReturnHome}
              onProfileClick={handleProfileClick}
            />
          </div>
        )}
        
        {gameState === 'profile' && (
          <div className={`page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <ProfilePage 
              onBackClick={handleReturnHome}
            />
          </div>
        )}
        
        {gameState === 'championSelect' && (
          <ChampionSelect 
            onProjectSelect={handleProjectSelect}
            onBackToHome={handleReturnHome}
          />
        )}
        
        {gameState === 'projectDetails' && (
          <ProjectDetails 
            project={selectedProject}
            onBack={handleBackToSelect}
            onFinish={handleFinishExploring}
          />
        )}
        
        {gameState === 'postGame' && (
          <PostGameScreen 
            onExploreMore={() => setGameState('championSelect')}
            onReturnHome={handleReturnHome}
          />
        )}
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MatchmakingScreen from './components/MatchmakingScreen';
import MatchFoundScreen from './components/MatchFoundScreen';
import ChampionSelect from './pages/ChampionSelect';
import ProjectDetails from './pages/ProjectDetails';
import PostGameScreen from './components/PostGameScreen';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('home'); // home, searching, matchFound, championSelect, projectDetails, postGame
  const [selectedProject, setSelectedProject] = useState(null);
  const [skipIntro, setSkipIntro] = useState(false);

  const handlePlayClick = () => {
    if (skipIntro) {
      setGameState('championSelect');
    } else {
      setGameState('searching');
    }
  };

  const handleMatchFound = () => {
    setGameState('matchFound');
  };

  const handleAcceptMatch = () => {
    setGameState('championSelect');
  };

  const handleDeclineMatch = () => {
    setGameState('home');
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
    setGameState('home');
  };

  return (
    <Router>
      <div className="app">
        {gameState === 'home' && (
          <HomePage 
            onPlayClick={handlePlayClick} 
            skipIntro={skipIntro}
            setSkipIntro={setSkipIntro}
          />
        )}
        
        {gameState === 'searching' && (
          <MatchmakingScreen onMatchFound={handleMatchFound} />
        )}
        
        {gameState === 'matchFound' && (
          <MatchFoundScreen 
            onAccept={handleAcceptMatch}
            onDecline={handleDeclineMatch}
          />
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

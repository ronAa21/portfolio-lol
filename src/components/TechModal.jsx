import React from 'react';
import './TechModal.css';

const techProjects = {
  'Video Editing': [
    {
      id: 1,
      title: 'TikTok Content',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=TikTok',
      status: 'completed',
      chapter: 'I'
    },
    {
      id: 2,
      title: 'Suno Videos',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Suno',
      status: 'active',
      chapter: 'II'
    },
    {
      id: 3,
      title: 'UGC Content',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=UGC',
      status: 'locked',
      chapter: 'III'
    },
    {
      id: 4,
      title: 'Faceless Videos',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Faceless',
      status: 'locked',
      chapter: 'IV'
    },
    {
      id: 5,
      title: 'Animation',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Animation',
      status: 'locked',
      chapter: 'V'
    }
  ],
  'Color Grading': [
    {
      id: 1,
      title: 'Cinematic Look',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Cinematic',
      status: 'completed',
      chapter: 'I'
    },
    {
      id: 2,
      title: 'Natural Colors',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Natural',
      status: 'active',
      chapter: 'II'
    },
    {
      id: 3,
      title: 'Stylized',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Stylized',
      status: 'locked',
      chapter: 'III'
    }
  ],
  'Motion Graphics': [
    {
      id: 1,
      title: 'Text Animation',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Text',
      status: 'completed',
      chapter: 'I'
    },
    {
      id: 2,
      title: 'Logo Animation',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Logo',
      status: 'active',
      chapter: 'II'
    },
    {
      id: 3,
      title: 'Transitions',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Transitions',
      status: 'locked',
      chapter: 'III'
    }
  ],
  'Sound Design': [
    {
      id: 1,
      title: 'Music Sync',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Music',
      status: 'completed',
      chapter: 'I'
    },
    {
      id: 2,
      title: 'Sound Effects',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=SFX',
      status: 'active',
      chapter: 'II'
    }
  ],
  'Visual Effects': [
    {
      id: 1,
      title: 'Particles',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Particles',
      status: 'completed',
      chapter: 'I'
    },
    {
      id: 2,
      title: 'Compositing',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Compositing',
      status: 'active',
      chapter: 'II'
    }
  ],
  'Animation': [
    {
      id: 1,
      title: 'Stick Figure',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Stick+Figure',
      status: 'completed',
      chapter: 'I'
    },
    {
      id: 2,
      title: 'Character',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Character',
      status: 'active',
      chapter: 'II'
    }
  ],
  'Storytelling': [
    {
      id: 1,
      title: 'Narrative',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Narrative',
      status: 'completed',
      chapter: 'I'
    },
    {
      id: 2,
      title: 'Structure',
      thumbnail: 'https://via.placeholder.com/200x300/1a1a2e/c8aa6e?text=Structure',
      status: 'active',
      chapter: 'II'
    }
  ]
};

const TechModal = ({ tech, onClose }) => {
  const projects = techProjects[tech] || [];

  return (
    <div className="tech-modal-overlay" onClick={onClose}>
      <div className="tech-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="tech-modal-header">
          <div className="tech-modal-title">
            <span className="modal-welcome">EXPLORE SKILL:</span>
            <h2>{tech.toUpperCase()}</h2>
          </div>
          <button className="tech-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="tech-modal-body">
          <h3 className="chapter-title">PROJECTS SHOWCASE</h3>
          
          <div className="tech-chapters-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`tech-chapter-card ${project.status}`}
              >
                <div className="chapter-image">
                  <img src={project.thumbnail} alt={project.title} />
                  {project.status === 'completed' && (
                    <div className="chapter-check">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                  )}
                  {project.status === 'locked' && (
                    <div className="chapter-lock">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="5" y="11" width="14" height="10" rx="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="chapter-number">{project.chapter}</div>
                <div className="chapter-info">
                  <p className="chapter-name">{project.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-modal-footer">
            <div className="progress-info">
              <div className="progress-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8aa6e" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span className="progress-level">{projects.filter(p => p.status === 'completed').length}</span>
              </div>
              <div className="progress-text">
                <span className="progress-count">{projects.filter(p => p.status === 'completed').length}/{projects.length}</span>
                <span className="progress-label">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechModal;

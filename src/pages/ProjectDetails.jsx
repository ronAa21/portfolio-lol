import React, { useState, useEffect } from 'react';
import { categories } from '../data/projectsData';
import './ProjectDetails.css';

const ProjectDetails = ({ project, onBack, onFinish }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return null;
  }

  const categoryInfo = project.category ? categories[project.category] : null;

  return (
    <div className="project-details">
      <div className="project-details-header">
        <div className="header-left">
          <button className="header-btn" onClick={onBack}>
            ← BACK TO SELECT
          </button>
        </div>
        
        <div className="header-actions">
          <button className="header-btn" onClick={onFinish}>
            FINISH EXPLORING
          </button>
          <button className="header-btn primary" onClick={() => window.open(project.videoUrl, '_blank')}>
            ▶ WATCH FULL VIDEO
          </button>
        </div>
      </div>

      <div className="project-details-content">
        {isLoading ? (
          <div className="loading-screen">
            <div className="loading-icon"></div>
            <p className="loading-text">Loading Champion...</p>
          </div>
        ) : (
          <>
            <div className="video-container">
              <div className="video-wrapper">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="project-main-info">
              <div className="project-description-section">
                <h2>{project.title}</h2>
                {categoryInfo && (
                  <p className="project-subtitle">
                    {categoryInfo.icon} {categoryInfo.name}
                  </p>
                )}
                
                <p>{project.description}</p>
                
                {project.role && (
                  <p><strong>My Role:</strong> {project.role}</p>
                )}
                
                {project.client && (
                  <p><strong>Client:</strong> {project.client}</p>
                )}
              </div>

              <div className="project-sidebar">
                {project.software && (
                  <div className="info-panel">
                    <h3>SOFTWARE USED</h3>
                    <div className="software-list">
                      {project.software.map((sw, index) => (
                        <span key={index} className="software-badge">{sw}</span>
                      ))}
                    </div>
                  </div>
                )}

                {project.techniques && (
                  <div className="info-panel">
                    <h3>TECHNIQUES</h3>
                    <div className="techniques-list">
                      {project.techniques.map((tech, index) => (
                        <span key={index} className="technique-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="info-panel">
                  <h3>PROJECT INFO</h3>
                  {project.duration && (
                    <div className="info-item">
                      <span className="info-label">Duration</span>
                      <span className="info-value">{project.duration}</span>
                    </div>
                  )}
                  {categoryInfo && (
                    <div className="info-item">
                      <span className="info-label">Category</span>
                      <span className="info-value">{categoryInfo.name}</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="info-item">
                      <span className="info-label">Status</span>
                      <span className="info-value">⭐ Featured</span>
                    </div>
                  )}
                </div>

                <div className="cta-panel">
                  <h3>INTERESTED IN WORKING TOGETHER?</h3>
                  <p>Let's create something amazing together. Get in touch to discuss your project.</p>
                  <button className="cta-button" onClick={() => alert('Contact form would open here!')}>
                    CONTACT ME
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;

import React from 'react';
import { categories } from '../data/projectsData';
import './ProjectCard.css';

const ProjectCard = ({ project, isSelected, onClick }) => {
  const categoryInfo = project.category ? categories[project.category] : null;

  return (
    <div 
      className={`project-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="project-thumbnail">
        <img src={project.thumbnail} alt={project.title} />
        
        {project.featured && (
          <div className="project-featured-badge">⭐ FEATURED</div>
        )}
        
        <div className="project-overlay">
          <div className="play-overlay-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M18 14L34 24L18 34V14Z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        
        <div className="project-meta">
          {categoryInfo && (
            <div className="project-category">
              <span>{categoryInfo.icon}</span>
              <span className="category-badge">{categoryInfo.name.split(' ')[0]}</span>
            </div>
          )}
          
          {project.duration && (
            <span className="project-duration">⏱️ {project.duration}</span>
          )}
          
          {project.technologies && (
            <span className="project-duration">💻 {project.technologies.length} techs</span>
          )}
        </div>

        {project.software && project.software.length > 0 && (
          <div className="project-tech-tags">
            {project.software.slice(0, 2).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="project-tech-tags">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

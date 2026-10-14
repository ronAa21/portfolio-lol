import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData, softwareProjects, categories } from '../data/projectsData';
import './ChampionSelect.css';

const ChampionSelect = ({ onProjectSelect, onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectType, setProjectType] = useState('video'); // 'video' or 'software'
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleLockIn = () => {
    if (selectedProject) {
      onProjectSelect(selectedProject);
    }
  };

  // Filter projects based on category, type, and search
  const getFilteredProjects = () => {
    const projects = projectType === 'video' ? projectsData : softwareProjects;
    
    let filtered = projects;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const filteredProjects = getFilteredProjects();
  const currentCategoryInfo = selectedCategory !== 'all' ? categories[selectedCategory] : null;

  return (
    <div className="champion-select">
      <div className="champion-select-header">
        <button className="back-btn" onClick={onBackToHome}>
          ← BACK TO HOME
        </button>
        <h1 className="champion-select-title">CHOOSE YOUR CHAMPION!</h1>
      </div>

      <div className="champion-select-content">
        <div className="champion-select-left">
          <div 
            className={`role-icon ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('all')}
            title="All Projects"
          >
            🌟
          </div>
          
          {Object.entries(categories).map(([key, cat]) => (
            <div
              key={key}
              className={`role-icon ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => handleCategoryClick(key)}
              title={cat.name}
            >
              {cat.icon}
            </div>
          ))}
        </div>

        <div className="champion-select-main">
          <div className="project-type-tabs">
            <button 
              className={`project-tab ${projectType === 'video' ? 'active' : ''}`}
              onClick={() => {
                setProjectType('video');
                setSelectedProject(null);
              }}
            >
              VIDEO PROJECTS
            </button>
            <button 
              className={`project-tab ${projectType === 'software' ? 'active' : ''}`}
              onClick={() => {
                setProjectType('software');
                setSelectedProject(null);
              }}
            >
              SOFTWARE PROJECTS
            </button>
          </div>

          <input
            type="text"
            className="search-bar"
            placeholder="🔍 Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {currentCategoryInfo && (
            <div className="category-info">
              <span className="category-icon-large">{currentCategoryInfo.icon}</span>
              <div className="category-details">
                <h3>{currentCategoryInfo.name}</h3>
                <p>{currentCategoryInfo.description}</p>
              </div>
            </div>
          )}

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isSelected={selectedProject?.id === project.id}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No Projects Found</h3>
              <p>Try adjusting your filters or search query</p>
            </div>
          )}

          {selectedProject && (
            <div className="lock-in-section">
              <div className="selected-project-info">
                <img 
                  src={selectedProject.thumbnail} 
                  alt={selectedProject.title}
                  className="selected-thumbnail"
                />
                <div className="selected-details">
                  <h4>{selectedProject.title}</h4>
                  <p>{selectedProject.category ? categories[selectedProject.category]?.name : 'Software Project'}</p>
                </div>
              </div>
              
              <button 
                className="lock-in-btn"
                onClick={handleLockIn}
                disabled={!selectedProject}
              >
                LOCK IN
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChampionSelect;

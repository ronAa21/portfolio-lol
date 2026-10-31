import React, { useState } from 'react';
import './TechStacks.css';

const CATEGORIES = {
  "Editing": [
    ["Threads", "threads-icon.png", "#1e5aa8", "#0a2347", "Full Stack", "", "This is my first full stack project", "2023", "threads-login.png", ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"]],
    ["Final Cut Pro", "🎞️", "#2c8a3e", "#0c2d14", "Advanced", "Apple · macOS", "Professional video editing optimized for Mac with magnetic timeline.", "3 years"],
    ["DaVinci Resolve", "🎨", "#c9922b", "#4a2f08", "Advanced", "Blackmagic", "All-in-one editing and color grading powerhouse for cinema.", "4 years"],
    ["After Effects", "⚡", "#6b6b5e", "#25251f", "Expert", "Adobe · CC", "Motion graphics and visual effects for dynamic video content.", "5 years"],
  ],
  "Design": [
    ["Photoshop", "🖼️", "#2a6fb8", "#0c2547", "Expert", "Adobe · CC", "Image editing and digital art creation for thumbnails and graphics.", "6 years"],
    ["Illustrator", "✏️", "#d9531e", "#4a1505", "Advanced", "Adobe · CC", "Vector graphics for logos, icons, and scalable designs.", "4 years"],
    ["Figma", "🎯", "#7aa6e6", "#233a66", "Intermediate", "Web · Collaborative", "UI/UX design and prototyping for digital products.", "2 years"],
  ],
  "Audio": [
    ["Audition", "🎧", "#d9b814", "#4d3f05", "Advanced", "Adobe · CC", "Audio editing and cleanup for professional sound design.", "3 years"],
    ["Logic Pro", "🎵", "#9b3fd1", "#2b0f45", "Intermediate", "Apple · DAW", "Music production and audio composition for video projects.", "2 years"],
  ],
  "3D & VFX": [
    ["Blender", "🔮", "#1fb5a8", "#08332f", "Intermediate", "Open Source", "3D modeling, animation, and rendering for visual effects.", "2 years"],
    ["Cinema 4D", "💫", "#e0a02a", "#4a2e05", "Learning", "Maxon", "Motion graphics and 3D animation for broadcast design.", "1 year"],
  ],
  "Workflow": [
    ["Frame.io", "📦", "#3f9b6b", "#0f3322", "Advanced", "Cloud · Review", "Client collaboration and video review platform.", "3 years"],
    ["Notion", "📝", "#4f7fc6", "#142a40", "Expert", "Productivity", "Project management and documentation for creative workflows.", "4 years"],
  ]
};

const TechStacks = () => {
  const [activeCategory, setActiveCategory] = useState("Editing");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentProjects = CATEGORIES[activeCategory];
  const selectedProject = currentProjects[selectedIndex];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedIndex(0);
  };

  const handleProjectClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="tech-stacks-panel">
      {/* Category Tabs */}
      <div className="tech-tabs">
        {Object.keys(CATEGORIES).map((category) => (
          <button
            key={category}
            className={`tech-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="tech-content-wrapper">
        {/* Project Grid */}
        <div className="tech-projects-grid">
          {currentProjects.map((project, index) => (
            <button
              key={index}
              className={`tech-project-item ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => handleProjectClick(index)}
              aria-label={project[0]}
            >
              <div 
                className="tech-project-icon"
                style={{
                  '--color-1': project[2],
                  '--color-2': project[3]
                }}
              >
                {project[1].endsWith('.png') ? (
                  <img src={`/src/visuals/${project[1]}`} alt={project[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  project[1]
                )}
              </div>
              <span className="tech-project-name">{project[0]}</span>
            </button>
          ))}
        </div>

        {/* Hero Icon - Shows login screenshot for Threads */}
        <div className="tech-hero-icon" aria-hidden="true">
          {selectedProject[8] ? (
            <img src={`/src/visuals/${selectedProject[8]}`} alt={`${selectedProject[0]} preview`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : selectedProject[1].endsWith('.png') ? (
            <img src={`/src/visuals/${selectedProject[1]}`} alt={selectedProject[0]} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            selectedProject[1]
          )}
        </div>

        {/* Detail Panel */}
        <div className="tech-detail-panel">
          <h2 className="tech-detail-title">{selectedProject[0].toUpperCase()}</h2>
          <h3 className="tech-detail-subtitle">PROFICIENCY: {selectedProject[4].toUpperCase()}</h3>
          {selectedProject[5] && (
            <div className="tech-detail-tags">{activeCategory}, {selectedProject[5]}</div>
          )}
          {/* Tech Stack Icons */}
          {selectedProject[9] && (
            <div className="tech-stack-icons">
              {selectedProject[9].map((tech, idx) => (
                <div key={idx} className="tech-badge" title={tech}>
                  {tech.substring(0, tech === 'JavaScript' ? 'JS' : tech === 'Node.js' ? 'N' : tech === 'MySQL' ? 'SQL' : tech.substring(0, tech.indexOf('.')  > 0 ? tech.indexOf('.') : 2)).toUpperCase()}
                </div>
              ))}
            </div>
          )}
          <p className="tech-detail-description">{selectedProject[6]}</p>
          <div className="tech-detail-experience">Experience: {selectedProject[7]}</div>
          <div className="tech-detail-actions">
            <button className="tech-action-btn">VIEW PROJECTS</button>
            <button className="tech-action-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
